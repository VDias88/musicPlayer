/* eslint-disable react/no-unstable-nested-components */
import React, { View } from 'react'
import { StyleSheet } from 'react-native'
import {
  ListItem, Text
} from 'react-native-ui-lib'
import { AntDesign } from '@expo/vector-icons'

function MusicRow({ title, time, onPress }) {
  return (
    <ListItem onPress={onPress}>
      <Text grey10 text60 marginL-10>{title}</Text>
    </ListItem>
  )
}
const styles = StyleSheet.create({
  button: {

  }
})
export default MusicRow
