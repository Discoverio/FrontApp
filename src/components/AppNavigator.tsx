import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { Ionicons } from '@expo/vector-icons';
import { Text, View } from 'react-native';
import HeaderApp from '..//components/HeaderApp';
import s from '../assets/styles/globalStyles';
import { StatusBar } from 'react-native';


import { HomeScreen } from '../screens/HomeScreen';
// import { LoginScreen } from '../screens/LoginScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { HystoryScreen } from '../screens/HystoryScreen';
import { FavScreen } from '../screens/FavScreen';
import { LoginScreen } from '../screens/LoginScreen';
import { RegisterScreen } from '../screens/RegisterScreen';

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
              name={focused ? 'star' : 'star-outline'}
              color={focused ? '#fff' : '#fff'}
            />
          ),
        }}
        component={FavScreen}
        name='Fav'
      />
      <Tab.Screen
        options={{
          title: ({ color, focused }) => (
            <Ionicons
              size={25}
              name={focused ? 'home-sharp' : 'home-outline'}
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
              name={focused ? 'person-circle' : 'person-circle-outline'}
              color={focused ? '#fff' : '#fff'}
            />
          ),
        }}
        component={ProfileScreen}
        name='Profile'
      />

    </Tab.Navigator>
  );
};

export default AppNavigator;


