import axios, { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import {
  clearLS,
  getAccessTokenFromLS,
  getRefreshTokenFromLS,
  setAccesTokenToLS,
  setProfileFromLS,
  setRefreshTokenToLS,
  setWalletFromLS
} from './auth'
import { LoginResponse } from '~/types/auth.type'

function createHttp(): AxiosInstance {
  let accessToken: string | null = getAccessTokenFromLS()
  let refreshToken: string | null = getRefreshTokenFromLS()
  // let refreshTokenRequest: Promise<string> | null = null

  const instance = axios.create({
    baseURL: 'http://127.0.0.1:6677/api/',
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json'
    }
  })

  instance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      if (accessToken && config.headers) {
        config.headers['authorization'] = `Bearer ${accessToken}`
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
        const dataWallet = loginResponse.data.wallets

        accessToken = loginResponse.data.tokenInfos.accessToken
        refreshToken = loginResponse.data.tokenInfos.refreshToken
        if (loginResponse.statusCode === 200) {
          setProfileFromLS(dataProfile)
          setWalletFromLS(dataWallet)

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
      // alert('Phiên đăng nhập hết hạn')
      // const config = error.response?.config || {}
      // const { url } = config
      // if (url !== '/auth/refresh-token') {
      //   // alert('Phiên đăng nhập hết hạn')
      //   refreshTokenRequest = refreshTokenRequest
      //     ? refreshTokenRequest
      //     : handleRefreshToken().finally(() => {
      //         refreshTokenRequest = null
      //       })
      //   return refreshTokenRequest.then((access_token: string) => {
      //     console.log(access_token)
      //     return instance({ ...config, headers: { ...config.headers, ['authorization']: `Bearer ${access_token}` } })
      //   })
      // }
      // clearLS()
      accessToken = ''
      refreshToken = ''
      return Promise.reject(error)
    }
  )

  // async function handleRefreshToken(): Promise<string> {
  //   try {
  //     const response = await instance.post<RefreshTokenResponse>('/auth/refresh-token', {
  //       refreshToken: refreshToken
  //     })
  //     if (response.data.statusCode === 200) {
  //       const { accessToken: newAccessToken, refreshToken: newRefreshToken } = response.data.data
  //       setAccesTokenToLS(newAccessToken)
  //       setRefreshTokenToLS(newRefreshToken)
  //       accessToken = newAccessToken
  //       refreshToken = newRefreshToken
  //       return newAccessToken
  //     }

  //     throw new Error('Refresh token failed')
  //   } catch (error) {
  //     clearLS()
  //     accessToken = ''
  //     refreshToken = ''
  //     throw error
  //   }
  // }

  return instance
}

const http = createHttp()

export default http
