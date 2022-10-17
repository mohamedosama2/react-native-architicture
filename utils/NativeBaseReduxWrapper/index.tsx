import * as React from 'react'
import { store } from '../store'
import { Provider } from 'react-redux'
import { LogBox, StyleSheet } from 'react-native'
import {  NativeBaseProvider } from 'native-base'
import { SafeAreaView } from 'react-native-safe-area-context'
import { theme } from '../NativeBaseTheme'

type Component = React.FC

const NativeBaseReduxWrapper = (Component: Component, props: any) => {


  React.useEffect(() => {
    /// Some Time
    LogBox.ignoreLogs(['EventEmitter.removeListener'])
  }, [])
  return (
    <NativeBaseProvider {...{ theme }}>
      <SafeAreaView style={styles.container}>
        <Provider store={store}>
          <Component {...props} />
        </Provider>
      </SafeAreaView>
    </NativeBaseProvider>
  )
}

export default NativeBaseReduxWrapper
const styles = StyleSheet.create({
  container: { flex: 1 }
})
