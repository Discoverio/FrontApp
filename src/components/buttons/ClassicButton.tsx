import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ClassicButton = ({ title }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('DangerScreen');
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#5db0cd',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    marginVertical: 10,
    zIndex: 1 // Ajouter cette ligne pour définir un zIndex supérieur
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
});

export default ClassicButton;
