import React, { useEffect, useState } from 'react'
import { StyleSheet, FlatList } from 'react-native'
import {
  Button,
  LoaderScreen,
  ListItem,
  Text,
} from 'react-native-ui-lib'
import { Audio, InterruptionModeIOS, InterruptionModeAndroid } from 'expo-av'
import { observer } from 'mobx-react'
import Container from '../components/Container'
import MusicsStore from '../stores/musics/MusicsStore'
import MusicRow from './components/MusicRow'

const store = new MusicsStore()
const Home = observer(({ navigation }) => {
  const [currentSound, setSound] = useState()
  const [currenStatus, seStatus] = useState()

  useEffect(() => {
    const fetchData = async () => {
      await Audio.setAudioModeAsync({
        staysActiveInBackground: true,
        interruptionModeAndroid: InterruptionModeAndroid.DoNotMix,
        shouldDuckAndroid: true,
        playThroughEarpieceAndroid: true,
        allowsRecordingIOS: true,
        interruptionModeIOS: InterruptionModeIOS.DoNotMix,
        playsInSilentModeIOS: true,
      })
    }
    fetchData()
  }, [])
  useEffect(() => {
    store.getMusics()
  }, [])
  useEffect(() => {
    console.log(currenStatus)
  }, [currenStatus])
  async function playMusic(music) {
    const { sound, status } = await Audio.Sound.createAsync({ uri: music }, { shouldPlay: true, staysActiveInBackground: true })
    setSound(sound)
    seStatus(status)
    await currentSound.playAsync()
  }
  function stopMusic() {
    currentSound.unloadAsync()
  }
  return (
    <Container>
      {store.isFetching && <LoaderScreen color="white" />}
      <Button onPress={() => stopMusic()}><Text>Parar</Text></Button>
      {store.musics?.map((e, i) => (
        <MusicRow title={e.filename} time={e.duration} key={i} onPress={() => playMusic(e.uri)} />
      ))}
    </Container>
  )
})
export default Home
const styles = StyleSheet.create({

})
