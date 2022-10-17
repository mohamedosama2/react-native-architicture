import { LayoutRoot, Navigation } from 'react-native-navigation'
import RegisterScreen from '../../screens/auth/RegisterScreen'
import SignInScreen from '../../screens/auth/SignInScreen'
import DetailsScreen from '../../screens/home/DetailsScreen'
import HomeScreen from '../../screens/home/HomeScreen'
import ReduxWrapper from '../../utils/ReduxWrapper'
import { DETAILS, HOME, REGISTER, SIGNIN } from '../constants'

import * as React from 'react'
import NativeBaseReduxWrapper from '../../utils/NativeBaseReduxWrapper'
import NativeBaseReduxScrollWrapper from '../../utils/NativeBaseReduxScrollWrapper'

/// REGISTRATION
Navigation.registerComponent(REGISTER, () => RegisterScreen)
Navigation.registerComponent(SIGNIN, () => SignInScreen)
/// MAIN
Navigation.registerComponent(
  DETAILS,
  () => (props) => NativeBaseReduxWrapper(DetailsScreen, props),
  () => DetailsScreen
)
Navigation.registerComponent(
  HOME,
  () => (props) => NativeBaseReduxScrollWrapper(HomeScreen, props),
  () => HomeScreen
)

const loginRoots = [SIGNIN, REGISTER] as Array<string>
const mainRoots = [HOME, DETAILS] as Array<string>

export const loginRoot = {
  root: {
    stack: {
      children: loginRoots.map((root) => ({ component: { name: root } }))
    }
  }
} as LayoutRoot

export const mainRoot = {
  root: {
    topTabs: {
      children: mainRoots.map((root) => ({ component: { name: root } })),
      options: {
        topBar: { visible: false }
      }
    }
  }
} as LayoutRoot

export const setup = Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot(mainRoot)
})
