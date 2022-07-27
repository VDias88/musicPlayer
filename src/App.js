/* eslint-disable react/react-in-jsx-scope */
import { registerRootComponent } from 'expo'
import AppNavigator from './navigation/AppNavigation'

export default function App() {
  return (
    <AppNavigator />
  )
}
registerRootComponent(App)
