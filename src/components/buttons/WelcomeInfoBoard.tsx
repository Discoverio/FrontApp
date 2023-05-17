import React from 'react';
import { View, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const WelcomeIcon = ({ color }) => {
  return (
    <View style={{ alignItems: 'center' }}>
      <Ionicons name="finger-print-outline" size={54} color={color} />
    </View>
  );
}

const WelcomeInfoBoard = ({ title, subtitle, welcomeIconColor }) => {
  return (
    <View style={{ flexDirection: 'row', margin: 40, alignItems: 'center' }}>
      <View>
        <Text style={{ fontSize: 24, fontWeight: '700', color: '#18206F' }}>{title}</Text>
        <Text style={{ fontSize: 24, fontWeight: '700', color: '#18206F' }}>{subtitle}</Text>
      </View>
      <View style={{ marginRight: 10, marginLeft:20 }}>
        <WelcomeIcon color={welcomeIconColor} />
      </View>      
    </View>
  );
}

export default WelcomeInfoBoard;
