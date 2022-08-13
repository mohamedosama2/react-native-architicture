import { useEffect } from 'react'
import { Navigation } from 'react-native-navigation'
import HomeScreen from './HomeScreen'

export default function start(): void {
  Navigation.registerComponent('HomeScreen', () => HomeScreen)
  Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
      root: {
        stack: {
          id: 'mainStack',
          children: [
            {
              component: {
                name: 'HomeScreen',
                options: {
                  topBar: {
                    visible: false
                  }
                }
              }
            }
          ]
        }
      }
    })
  })
}
