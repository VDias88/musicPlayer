/* eslint-disable no-plusplus */
import {
  makeAutoObservable,
} from 'mobx'
import * as MediaLibrary from 'expo-media-library'

class MusicsStore {
  value = ''
  musics = []
  modalData = {
    showModal: false,
    message: ''
  }
  isFetching = false

  async getMusics() {
    this.setIsFetching(true)
    const res = await MediaLibrary.requestPermissionsAsync()
    this.setIsFetching(false)
    if (res) {
      const media = await MediaLibrary.getAssetsAsync({
        mediaType: MediaLibrary.MediaType.audio,
      })
      this.setMusics(media.assets)
      // console.log(this.musics)
      console.log('Deu bom')
    } else {
      this.modalData = {
        showModal: true,
        message: 'Ocorreu erro ao buscar suas músicas'
      }
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
  setMusics(value) {
    this.musics = value
  }
}
export default MusicsStore
