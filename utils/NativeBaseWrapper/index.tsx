import { NativeBaseProvider } from 'native-base'
import * as React from 'react'
import { Text, View, StyleSheet, StatusBar, LogBox } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { extendTheme } from 'native-base'
import { theme } from '../NativeBaseTheme'

interface WrapperProps {
  children: React.ReactNode
}

const Wrapper = ({ children }: WrapperProps) => {
  React.useEffect(() => {
    /// Some Time
    LogBox.ignoreLogs(['EventEmitter.removeListener'])
  }, [])

  return (
    <NativeBaseProvider {...{ theme }}>
      <SafeAreaView style={styles.container}>{children}</SafeAreaView>
    </NativeBaseProvider>
  )
}

export default Wrapper

const styles = StyleSheet.create({
  container: { flex: 1 }
})
