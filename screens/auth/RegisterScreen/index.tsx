import * as React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import SignUp from '../../../forms/SignUpForm'

interface RegisterScreenProps {}

const RegisterScreen = (props: RegisterScreenProps) => {
  return <SignUp />
}

export default RegisterScreen

const styles = StyleSheet.create({
  container: {}
})
