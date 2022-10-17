/* eslint-disable react/no-unstable-nested-components */
import React from 'react'
import { StyleSheet } from 'react-native'
import { Button } from 'react-native-ui-lib'
import { AntDesign } from '@expo/vector-icons'

function CustomTabButton({ children, onPress }) {
  return (
    <Button
      onPress={onPress}
      size={Button.sizes.small}
      style={{
        width: 50,
        height: 50,
        top: -30,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        elevation: 10,
        backgroundColor: '#1d3557'
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
