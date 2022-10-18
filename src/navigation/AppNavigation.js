/* eslint-disable react/no-unstable-nested-components */
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { BlurView } from 'expo-blur'
import { StyleSheet } from 'react-native'
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
            alignItems: 'center',
            height: 70,
            borderTopWidth: 0,
            position: 'absolute',
            elevation: 0
          },
          tabBarBackground: () => (
            <BlurView tint="light" intensity={5} style={StyleSheet.absoluteFill} />
          ),
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarShowLabel: false,
            tabBarButton: (props) => (
              <CustomTabButton {...props} onPress={() => console.log('test')} />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>

  )
}
export default AppNavigator
