import React from 'react';
import { View, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const TrophyIcon = ({ color }) => {
  return (
    <View style={{ alignItems: 'center' }}>
      <Ionicons name="trophy" size={28} color={color} />
    </View>
  );
}

const QuickInfoBoard = ({ credits, activities, trophyColor }) => {
  return (
    <View style={{ flexDirection: 'row', margin: 40, alignItems: 'center' }}>
      <View>
        <Text style={{ fontSize: 14, fontWeight: '700', color: '#18206F' }}>{credits} crédits</Text>
        <Text style={{ fontSize: 14, fontWeight: '700', color: '#18206F' }}>{activities} activités réalisées</Text>
      </View>
      <View style={{ marginRight: 10}}>
        <TrophyIcon color={trophyColor} />
      </View>      
    </View>
  );
}

export default QuickInfoBoard;
