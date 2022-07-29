import {
  makeAutoObservable, makeObservable, computed, action, observable
} from 'mobx'

class MusicsStore {
  value = 0

  constructor() {
    makeAutoObservable(this)
  }
  increment() {
    this.value++
  }
}
export default MusicsStore
