import React from 'react'
import { StyleSheet } from 'react-native'
import {
  Text, View, Assets, Constants, Button, Colors, Typography,
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
    padding: 10
  },
})
