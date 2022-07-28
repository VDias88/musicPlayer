import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import Home from '../pages/Home'
import CustomTabButton from '../components/CustomTabButton'

const Tab = createBottomTabNavigator()

function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarIconStyle: { display: 'none' },
          headerShown: false,
          tabBarStyle: {
            alignItems: 'center', height: 56
          }
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarShowLabel: false,
            tabBarButton: (props) => (
              <CustomTabButton {...props} />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>

  )
}
export default AppNavigator
