import { LoginResponse, LogoutResponse, RefreshTokenResponse } from '~/types/auth.type'
import http from '~/utils/http'

export const loginAccount = (body: { username: string; password: string }): Promise<LoginResponse> => {
  return http.post('/auth/login', body)
}

export const refreshToken = (body: { refreshToken: string }): Promise<RefreshTokenResponse> => {
  return http.post('/auth/refresh-token', body)
}

export const logoutAccount = (body: { refreshToken: string }): Promise<LogoutResponse> => {
  return http.post('/auth/logout', body)
}
