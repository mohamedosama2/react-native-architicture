import AsyncStorage from '@react-native-async-storage/async-storage'
import { User } from '../store/reducers/Apis/auth/types'
import { JWt, USER } from './types'

export const storeData = async (key: string, value: any) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem(key, jsonValue)
  } catch (e) {
    // saving error
  }
}

export const getData = async (key: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key)
    return jsonValue != null ? JSON.parse(jsonValue) : null
  } catch (e) {
    // error reading value
  }
}

export const getJwtToken = async (): Promise<string | null> => {
  return (await getData(JWt)) as string | null
}
export const getUserData = async (): Promise<User | null> => {
  return (await getData(USER)) as User | null
}

export const storeJwtToken = async (token: string): Promise<void> => {
  await storeData(JWt, token)
}

export const storeUserData = async (user: User): Promise<void> => {
  await storeData(USER, user)
}
