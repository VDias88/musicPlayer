import React, { useEffect, useState } from 'react'
import {
  StyleSheet, FlatList, ScrollView, RefreshControl
} from 'react-native'
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
  const [currentSound, setSound] = useState(new Audio.Sound())
  const [currenStatus, seStatus] = useState()
  const [refreshing, setRefreshing] = useState(false)
  useEffect(() => {
    store.getMusics()
  }, [])
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
  // useEffect(() => {
  //   async function getData() {
  //     const status = await currentSound.getStatusAsync()
  //     seStatus(status)
  //   }
  //   getData()
  //   console.log(currenStatus)
  // }, [currenStatus])//TODO resolver bug preso
  async function playMusic(music) {
    if (currenStatus?.isPlaying) {
      currentSound.unloadAsync()
    }
    try {
      const { sound, status } = await Audio.Sound.createAsync({ uri: music }, { shouldPlay: true, staysActiveInBackground: true })
      setSound(sound)
      store.setCurrentMusic(sound)
      if (currenStatus?.isLoaded) {
        console.log('Tocando')
        await currentSound?.playAsync()
      }
    } catch (error) {
      console.log(error)
    }
  }
  function stopMusic() {
    currentSound.unloadAsync()
  }
  const onRefresh = React.useCallback(() => {
    setRefreshing(true)
    store.getMusics()
    setTimeout(() => {
      setRefreshing(false)
    }, 1000)
  }, [])
  return (
    <Container>
      {store.isFetching && <LoaderScreen color="white" />}
      <ScrollView
        // contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >

        {store.musics?.map((e, i) => (
          <MusicRow title={e.filename} time={e.duration} key={i} onPress={() => playMusic(e.uri)} />
        ))}
      </ScrollView>
    </Container>
  )
})
export default Home
const styles = StyleSheet.create({

})
