import React, { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import {
  Button,
  LoaderScreen,
  StackAggregator,
  Text,
} from 'react-native-ui-lib'
import { Audio } from 'expo-av'
import { observer } from 'mobx-react'
import Container from '../components/Container'
import MusicsStore from '../stores/musics/MusicsStore'
import MusicRow from './components/MusicRow'

const store = new MusicsStore()
const Home = observer(({ navigation }) => {
  const [sound, setSound] = useState()
  useEffect(() => {
    store.getMusics()
  }, [])
  async function playMusic(music) {
    const { sound } = await Audio.Sound.createAsync({ uri: music }, { shouldPlay: true })
    setSound(sound)
    await sound.playAsync()
  }
  function stopMusic() {
    sound.unloadAsync()
  }
  return (
    <Container>
      {store.isFetching && <LoaderScreen color="white" />}
      <Button onPress={() => stopMusic()}><Text>Parar</Text></Button>
      {store.musics?.map((e) => (
        <MusicRow title={e.filename} time={e.duration} onPress={() => playMusic(e.uri)} />
      ))}
    </Container>
  )
})
export default Home
const styles = StyleSheet.create({

})
