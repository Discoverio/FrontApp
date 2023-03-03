import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { Ionicons } from '@expo/vector-icons';
import { Text, View } from 'react-native';
import HeaderApp from '..//components/HeaderApp';
import s from '../assets/styles/globalStyles';
import { StatusBar } from 'react-native';

import { HomeScreen } from '../screens/HomeScreen';
import { LoginScreen } from '../screens/LoginScreen';
import { ProfileScreen } from '../screens/ProfileScreen';

const Tab = createMaterialTopTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator style={{ paddingTop: StatusBar.currentHeight }} screenOptions={{
      tabBarStyle: { backgroundColor: "#18206F" },
      tabBarIndicatorStyle: {
        backgroundColor: '#dbe9ee',
      }
    }}>
      <Tab.Screen
        options={{
          title: ({ color, focused }) => (
            <Ionicons
              size={25}
              name={focused ? 'home' : 'home-outline'}
              color={focused ? '#fff' : '#fff'}
            />
          ),
        }}
        component={HomeScreen}
        name='Home'
      />
      <Tab.Screen
        options={{
          title: ({ color, focused }) => (
            <Ionicons
              size={25}
              name={focused ? 'people-sharp' : 'people-outline'}
              color={focused ? '#fff' : '#fff'}
            />
          ),
        }}
        component={ProfileScreen}
        name='Friends'
      />
      <Tab.Screen
        options={{
          title: ({ color, focused }) => (
            <Ionicons
              size={25}
              name={focused ? 'lock-closed' : 'lock-open-outline'}
              color={focused ? '#fff' : '#fff'}
            />
          ),
        }}
        component={LoginScreen}
        name='Login'
      />

    </Tab.Navigator>
  );
};

export default AppNavigator;


