import axios, { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import {
  clearLS,
  getAccessTokenFromLS,
  getRefreshTokenFromLS,
  setAccesTokenToLS,
  setProfileFromLS,
  setRefreshTokenToLS
} from './auth'
import { LoginResponse, RefreshTokenResponse } from '~/types/auth.type'

function createHttp(): AxiosInstance {
  let accessToken: string | null = getAccessTokenFromLS()
  let refreshToken: string | null = getRefreshTokenFromLS()
  let refreshTokenRequest: Promise<string> | null = null

  const instance = axios.create({
    baseURL: 'http://bong88-stg-api.nccdmm.fun/api/',
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json'
    }
  })

  instance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      if (accessToken && config.headers) {
        config.headers['token'] = `Bearer ${accessToken}`
        return config
      }
      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )

  instance.interceptors.response.use(
    (response: AxiosResponse) => {
      const { url } = response.config
      if (url === '/auth/login') {
        const loginResponse = response.data as LoginResponse
        const dataProfile = loginResponse.data.userInfos
        accessToken = loginResponse.data.tokenInfos.accessToken
        refreshToken = loginResponse.data.tokenInfos.refreshToken
        if (loginResponse.statusCode === 200) {
          setProfileFromLS(dataProfile)
          setAccesTokenToLS(accessToken)
          setRefreshTokenToLS(refreshToken)
          window.location.href = '/'
        }
      } else if (url === '/auth/log-out') {
        accessToken = ''
        refreshToken = ''
        clearLS()
      }
      return response
    },
    (error) => {
      const config = error.response?.config || {}
      const { url } = config
      if (url !== 'auth/refresh-token') {
        refreshTokenRequest = refreshTokenRequest
          ? refreshTokenRequest
          : handleRefreshToken().finally(() => {
              refreshTokenRequest = null
            })
        return refreshTokenRequest.then((access_token: string) => {
          return instance({ ...config, headers: { ...config.headers, token: `Bearer ${access_token}` } })
        })
      }
      clearLS()
      accessToken = ''
      refreshToken = ''
      return Promise.reject(error)
    }
  )

  function handleRefreshToken(): Promise<string> {
    return instance
      .post<RefreshTokenResponse>('auth/refresh-token', {
        refreshToken: refreshToken
      })
      .then((res) => {
        if (res.data.statusCode === 200) {
          const { accessToken: newAccessToken, refreshToken: newRefreshToken } = res.data.data
          setAccesTokenToLS(newAccessToken)
          setRefreshTokenToLS(newRefreshToken)
          accessToken = newAccessToken
          refreshToken = newRefreshToken
          return newAccessToken
        }
        throw new Error('Refresh token failed')
      })
      .catch((error) => {
        window.location.href = '/login'
        clearLS()
        accessToken = ''
        refreshToken = ''
        throw error
      })
  }

  return instance
}

const http = createHttp()

export default http
