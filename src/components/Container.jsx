import React from 'react'
import { StyleSheet } from 'react-native'
import {
  View,
} from 'react-native-ui-lib'

export default function Container({ children }) {
  return (
    <View style={styles.container}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#001219'
  },
})
