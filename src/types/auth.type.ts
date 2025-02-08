import { ROLES } from './role.type'
import { ResponseApi } from './utils.type'

export interface Profile {
  accountStatus: number
  password?: string
  firstName?: string
  lastName?: string
  avt: string | null
  createdAt: string
  email: string
  fullName: string
  lastLoginAt: string | null
  mobile: string | null
  parentId: string | null
  role: ROLES
  updatedAt: string
  username: string
  walletBalance: number
  _id: string
}
export interface Wallet {
  username: string
  balance: number
  _id: string
}
export type AuthResponse = ResponseApi<{
  userInfos?: Profile
  wallets?: Profile

  tokenInfos?: {
    accessToken: string
    refreshToken: string
  }
}>

interface TokenInfo {
  accessToken: string
  refreshToken: string
}

export interface LoginResponse {
  data: {
    userInfos: Profile
    wallets: Wallet
    tokenInfos: TokenInfo
  }
  statusCode: number
}

export interface RefreshTokenResponse {
  data: TokenInfo
  statusCode: number
}

export interface LogoutResponse {
  message?: string
  statusCode: number
  success: boolean
}
