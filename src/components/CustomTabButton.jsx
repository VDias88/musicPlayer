/* eslint-disable react/no-unstable-nested-components */
import React from 'react'
import { StyleSheet } from 'react-native'
import { Button } from 'react-native-ui-lib'
import { AntDesign } from '@expo/vector-icons'

function CustomTabButton({ state, children, onPress }, props) {
  return (
    <Button
      onPress={onPress}
      size={Button.sizes.small}
      style={{
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: null
      }}
      iconSource={() => <AntDesign name="home" size={24} color="white" />}
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
