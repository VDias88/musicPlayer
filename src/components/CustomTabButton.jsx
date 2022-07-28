/* eslint-disable react/no-unstable-nested-components */
import React from 'react'
import { StyleSheet } from 'react-native'
import { Button } from 'react-native-ui-lib'
import { AntDesign } from '@expo/vector-icons'

function CustomTabButton({ children, onPress }) {
  return (
    <Button
      borderRadius={50}
      onPress={onPress}
      size={Button.sizes.small}
      style={{
        width: 50, height: 50, top: -30, justifyContent: 'center', alignItems: 'center', alignSelf: 'center'
      }}
      iconSource={() => <AntDesign name="download" size={24} color="white" />}
    >
      {children}
    </Button>
  )
}
const styles = StyleSheet.create({
  button: {

  }
})
export default CustomTabButton
