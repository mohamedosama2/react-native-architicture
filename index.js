// In index.js of a new project
import React, { useEffect, useState } from 'react'
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native'
import { Navigation } from 'react-native-navigation'
import AsyncStorage from '@react-native-async-storage/async-storage'
const isLogged = 'isLogged'
const loginRoot = {
  root: {
    stack: {
      children: [
        {
          component: {
            name: 'Login'
          }
        }
      ]
    }
  }
}
function Home(props) {
  useEffect(() => {
    const listener = {
      componentDidAppear: () => {
        console.log('RNN', `componentDidAppear`)
      },
      componentDidDisappear: () => {
        console.log('RNN', `componentDidDisappear`)
      }
    }
    // Register the listener to all events related to our component
    const unsubscribe = Navigation.events().registerComponentListener(listener, props.componentId)
    return () => {
      // Make sure to unregister the listener during cleanup
      unsubscribe.remove()
    }
  }, [])

  return (
    <View>
      <Text>Home Secreen</Text>
      <TouchableOpacity
        onPress={async () => {
          console.log('Auth')
        }}>
        <Text>Out</Text>
      </TouchableOpacity>
    </View>
  )
}
function Setting(props) {
  console.log('Setting', props)
  return (
    <View>
      <Text>Setting Secreen</Text>
    </View>
  )
}
Setting.options = {
  bottomTab: {
    text: 'Settings'
  }
}
Home.options = {
  bottomTab: {
    text: 'Home'
  }
}
function Login() {
  return (
    <View>
      <Text>Login Screen Secreen</Text>
      <TouchableOpacity
        onPress={async () => {
          Navigation.setRoot(mainRoot)
        }}>
        <Text>Authenticate</Text>
      </TouchableOpacity>
    </View>
  )
}
Navigation.registerComponent('Home', () => Home)
Navigation.registerComponent('Setting', () => Setting)
Navigation.registerComponent('Login', () => Login)

const mainRoot = {
  root: {
    bottomTabs: {
      children: [
        {
          stack: {
            children: [{ component: { name: 'Home' } }]
          }
        },
        {
          stack: {
            children: [
              {
                component: {
                  name: 'Setting',
                  id: 'PROFILE_SCREEN_ID',
                  passProps: {
                    name: 'John Doe',
                    status: 'online'
                  }
                }
              }
            ]
          }
        }
      ]
    }
  }
}

Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot(loginRoot)
})
