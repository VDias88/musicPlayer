import { StatusBar } from 'expo-status-bar'
import { StyleSheet } from 'react-native'
import {
  Text, View, Assets, Constants, Button, Colors, Typography,
} from 'react-native-ui-lib'

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
