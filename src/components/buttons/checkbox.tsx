import React, { useState } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import s from '../../assets/styles/globalStyles';
import Ionicons from '@expo/vector-icons/Ionicons'
import { sendRequest } from '../../../../Backend/src/services/musics/interactions/checkbox';
import axios from 'axios';

async function getUserId() {
  try {
    const response = await axios.get('http://localhost:3000/session/userId');
    console.log(response.data);
    
    return response.data;
  } catch (error) {
    console.error("Une erreur s'est produite lors de la récupération du userId :", error);
    return null;
  }
}

export default function MyCheckbox({ albumId }) {
  const [checked, onChange] = useState(false);

  let userId;
  getUserId()
    .then(id => {
      userId = id;
    })
    .catch(error => {
      console.error(error);
    });

  function onCheckmarkPress() {
    onChange(!checked);

    if (!checked) {
      console.log("done");
      sendRequest("done", "POST", userId, { id: albumId });
    } else {
      console.log("undone");
      sendRequest("done", "DELETE", userId, { id: albumId });
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