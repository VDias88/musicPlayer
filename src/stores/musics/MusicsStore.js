/* eslint-disable no-plusplus */
import {
  makeAutoObservable,
} from 'mobx'
import * as MediaLibrary from 'expo-media-library'

class MusicsStore {
  value = ''
  currentMusic = {}
  currentMusicStatus = {}
  musics = []
  modalData = {
    showModal: false,
    message: ''
  }
  isFetching = false
  isPlayable = false
  async getMusics() {
    this.setIsFetching(true)
    const res = await MediaLibrary.requestPermissionsAsync()
    if (res) {
      const media = await MediaLibrary.getAssetsAsync({
        mediaType: MediaLibrary.MediaType.audio,
      })
      this.setMusics(media.assets)
      this.setIsFetching(false)
    } else {
      this.modalData = {
        showModal: true,
        message: 'Ocorreu erro ao buscar suas músicas'
      }
      this.setIsFetching(false)
    }
  }

  getInfo() {
    console.log('a')
  }
  constructor() {
    makeAutoObservable(this)
  }
  increment(value) {
    this.value = value
  }
  setIsFetching(value) {
    this.isFetching = value
  }
  setCurrentMusic(value) {
    this.currentMusic = value
  }
  setCurrentMusicStatus(value) {
    this.currentMusicStatus = value
  }
  setIsPlayable(value) {
    this.isPlayable = value
  }
  setMusics(value) {
    this.musics = value
  }
}
export default MusicsStore
