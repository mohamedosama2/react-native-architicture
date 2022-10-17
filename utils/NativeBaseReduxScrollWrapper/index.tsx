import * as React from 'react'
import { store } from '../store'
import { Provider } from 'react-redux'
import { LogBox, ScrollView, StyleSheet } from 'react-native'
import { extendTheme, NativeBaseProvider } from 'native-base'
import { SafeAreaView } from 'react-native-safe-area-context'
import { theme } from '../NativeBaseTheme'

type Component = React.FC

const NativeBaseReduxScrollWrapper = (Component: Component, props: any) => {
  

  React.useEffect(() => {
    /// Some Time
    LogBox.ignoreLogs(['EventEmitter.removeListener'])
  }, [])
  return (
    <NativeBaseProvider {...{ theme }}>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Provider store={store}>
            <Component {...props} />
          </Provider>
        </ScrollView>
      </SafeAreaView>
    </NativeBaseProvider>
  )
}

export default NativeBaseReduxScrollWrapper
const styles = StyleSheet.create({
  container: { flex: 1 }
})
