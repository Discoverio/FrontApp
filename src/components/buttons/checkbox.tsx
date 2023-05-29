import React, { useState } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import s from '../../assets/styles/globalStyles';
import Ionicons from '@expo/vector-icons/Ionicons'
import { sendRequest } from '../../../../Backend/src/services/musics/interactions/checkbox';

export default function MyCheckbox({ albumId }) {
  const [checked, onChange] = useState(false);

  function onCheckmarkPress() {
    onChange(!checked);

    if (!checked) {
      console.log("done");
      sendRequest("done", "POST", 1, { id: albumId });
    } else {
      console.log("undone");
      sendRequest("done", "DELETE", 1, { id: albumId });
    }
  }

  return (
    <Pressable
      style={[styles.checkboxBase, checked && styles.checkboxChecked, s.m4]}
      onPress={onCheckmarkPress}>
      {checked && <Ionicons name="checkmark" size={24} color="white" />}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  checkboxBase: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#18206F',
    backgroundColor: 'transparent',
  },

  checkboxChecked: {
    backgroundColor: '#18206F',
  },

  appContainer: {
    flex: 1,
    alignItems: 'center',
  },

  appTitle: {
    marginVertical: 16,
    fontWeight: 'bold',
    fontSize: 24,
  },

  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  checkboxLabel: {
    marginLeft: 8,
    fontWeight: 500,
    fontSize: 18,
  },
});