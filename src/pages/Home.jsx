import React from 'react'
import { StyleSheet } from 'react-native'
import {
  Text,
  Button
} from 'react-native-ui-lib'
import * as MediaLibrary from 'expo-media-library'
import { observer } from 'mobx-react'
import Container from '../components/Container'
import MusicsStore from '../stores/musics/MusicsStore'

const store = new MusicsStore()
const Home = observer(({ navigation }) => {
  // const [store] = useState(() => new MusicsStore())
  // async function getMusics() {
  //   const res = await MediaLibrary.requestPermissionsAsync()
  //   if (res) {
  //     const media = await MediaLibrary.getAssetsAsync({
  //       mediaType: MediaLibrary.MediaType.audio,
  //     })
  //     console.log(media)
  //   }
  // }
  console.log(store.value)
  return (
    <Container>
      <Button
        label="Get"
        onPress={() => store.increment()}
      />
      <Text>{store.value}</Text>
    </Container>
  )
})
export default Home
const styles = StyleSheet.create({

})
