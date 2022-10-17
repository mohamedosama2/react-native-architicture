// Need to use the React-specific entry point to import createApi
import { createApi } from '@reduxjs/toolkit/query/react'
import { axiosBaseQuery } from '../types'
import {
  LoginInputs,
  LoginResponse,
  PhoneConfirmationInputs,
  PhoneConfirmationVerifyInputs,
  ResetPasswordInputs,
  SignUpInputs,
  token,
  User
} from './types'

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
  baseQuery: axiosBaseQuery({
    ///   BASE URI
    baseUrl: 'https://batcy-backend.herokuapp.com/'
  }),
  endpoints(build) {
    return {
      /*                  < OUTPUT, INPUT >  */
      logIn: build.mutation<LoginResponse, LoginInputs>({
        query: (data: LoginInputs) => ({
          url: `auth/login`,
          method: 'post',
          data: data
        })
      }),
      SignUp: build.mutation<LoginResponse, SignUpInputs>({
        query: (data: SignUpInputs) => ({
          url: `auth/signup`,
          method: 'post',
          data: data
        })
      }),
      resetPassword: build.mutation<LoginResponse, ResetPasswordInputs>({
        query: (data: ResetPasswordInputs) => ({
          url: `auth/login`,
          method: 'post',
          data: data
        })
      }),
      phoneConfermation: build.mutation<LoginResponse, PhoneConfirmationInputs>({
        query: (data: PhoneConfirmationInputs) => ({
          url: `phone-confirmation`,
          method: 'post',
          data: data
        })
      }),
      phoneConfermationVerify: build.mutation<LoginResponse, PhoneConfirmationVerifyInputs>({
        query: (data: PhoneConfirmationVerifyInputs) => ({
          url: `phone-confirmation/verify`,
          method: 'post',
          data: data
        })
      }),

      getProfile: build.query<User, token>({
        query: (token: token) => ({
          url: `users/profile`,
          method: 'get',
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
      })
    }
  }
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useLogInMutation,
  useGetProfileQuery,
  useLazyGetProfileQuery,
  usePhoneConfermationMutation,
  usePhoneConfermationVerifyMutation,
  useSignUpMutation,
  useResetPasswordMutation
} = authApi
