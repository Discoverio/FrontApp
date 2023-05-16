import React from 'react';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import s from '../assets/styles/globalStyles';

const CircleIcon = () => (
  <View style={{
    position: 'absolute',
    top: 25,
    right: 20,
    backgroundColor: s.foregroundColor,
    borderRadius: 100,
    padding: 5,
    zIndex: 9999,
    width: 120,
    height: 120,
    background: "#dbe9ee",
    textAlign: 'center'
  }}>
    <Ionicons name="person-circle-outline" size={100} color="#fff" />
  </View>
);

export default CircleIcon;
