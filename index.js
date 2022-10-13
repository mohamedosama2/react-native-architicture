// In index.js of a new project
import React, { useEffect } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Navigation } from 'react-native-navigation'

Navigation.setDefaultOptions({
  animations: {
    showModal: {
      enter: {
        enabled: true,
        alpha: {
          from: 0,
          to: 1,
          duration: 300
        },
        scaleX: {
          from: 0.2,
          to: 0.9
        }
      },
      exit: {
        enabled: true,
        alpha: {
          from: 1,
          to: 0,
          duration: 300
        }
      }
    }
  }
})

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
          Navigation.push(props.componentId, {
            component: { name: 'Setting' }
          })
        }}>
        <Text>Go Settiign</Text>
      </TouchableOpacity>
    </View>
  )
}
function Setting(props) {
  console.log('Setting', props)
  return (
    <View>
      <TouchableOpacity
        onPress={async () => {
          console.log('Auth')
          Navigation.push(props.componentId, {
            component: { name: 'Home' }
          })
        }}>
        <Text>Go Home</Text>
      </TouchableOpacity>
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

Navigation.registerComponent('Home', () => Home)
Navigation.registerComponent('Setting', () => Setting)

const mainRoot = {
  root: {
    stack: {
      children: [
        {
          component: { name: 'Home' }
        },
        {
          component: { name: 'Setting' }
        }
      ]
    }
  }
}

Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot(mainRoot)
})
