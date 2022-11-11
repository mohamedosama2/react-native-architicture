export type token = string
export interface User {
  id: number
  username: string
  role: string
  phone: string
  email: string
  createdAt: Date
  updatedAt: Date
}

export interface LoginResponse {
  token: token
  user: User
}
export interface LoginInputs {
  phone: string
  password: string
}
export interface SignUpInputs {
  username: string
  phone: string
  password: string
}

export interface ResetPasswordInputs {
  phone: string
  password: string
  code: string
}

export interface PhoneConfirmationInputs {
  phone: string
}
export interface PhoneConfirmationVerifyInputs {
  phone: string
  code: string
}
