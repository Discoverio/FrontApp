import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const SettingsButton = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('DangerScreen');
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Ionicons name="settings" size={24} color="#18206f" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'transparent',
    padding: 10,
    position: 'absolute',
    top: 4,
    right: 4,
  },
});

export default SettingsButton;
