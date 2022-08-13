import React from 'react'
import { StyleSheet, View } from 'react-native'

export default function ParkMap() {
  return <View style={styles.mainView} />
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    borderRadius: 20,
    backgroundColor: 'grey'
  }
})
