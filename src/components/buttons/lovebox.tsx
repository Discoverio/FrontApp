import React, { useState } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import s from '../../assets/styles/globalStyles';
import Ionicons from '@expo/vector-icons/Ionicons';
import axios from 'axios';
import Constants from 'expo-constants';

export function sendRequest(action: string, method: string, id: any, content: { id: any; }) {
  const baseUrl = `${Constants.manifest?.extra?.REACT_APP_BACKEND_ADRESS}/infos/profile/history/musics`;
  const url = `${baseUrl}/${action}/${id}`;

  const body = content ? JSON.stringify(content) : JSON.stringify({ id: id });

  fetch(url, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: body,
  })
  .then(response => {
    if (response.ok) {
      console.log("ID envoyé avec succès !");
    } else {
      console.error("Une erreur s'est produite lors de l'envoi de l'ID.");
    }
  })
  .catch(error => {
    console.error(error);
  });
}

async function getUserId() {
  try {
    const response = await axios.get(`${Constants.manifest?.extra?.REACT_APP_BACKEND_ADRESS}/session/userId`);
    console.log(response.data);
    
    return response.data;
  } catch (error) {
    console.error("Une erreur s'est produite lors de la récupération du userId :", error);
    return null;
  }
}

export default function MyLovebox({ albumId }) {
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
    let nextStep;

    
    if (!checked) {
      // Étape 1: Passage à l'étape "heart"
      nextStep = "heart";
    } else if (checked === "heart") {
      // Étape 2: Passage à l'étape "heart-dislike"
      nextStep = "heart-dislike";
    } else {
      // Étape 3: Retour à l'étape vide
      nextStep = "";
    }
    
    onChange(nextStep);
    
    if (nextStep === "heart") {
      // Effectuer des opérations spécifiques à l'étape "heart"
      console.log("Cela fonctionne : Étape heart");
      console.log(userId, typeof userId);
      
      sendRequest("liked", "POST", userId, { id: albumId });

    } else if (nextStep === "heart-dislike") {
      // Effectuer des opérations spécifiques à l'étape "heart-dislike"
      console.log("Cela fonctionne : Étape heart-dislike");
      sendRequest("liked", "DELETE", userId, { id: albumId });
      sendRequest("unliked", "POST", userId, { id: albumId });

    }else{
      // Effectuer des opérations spécifiques à l'étape "clear"      
      sendRequest("unliked", "DELETE", userId, { id: albumId });
    }
  }
  
  return (
    <Pressable
      style={[styles.checkboxBase, checked && styles.checkboxChecked, s.m4]}
      onPress={onCheckmarkPress}>
    {checked === "heart" ? (
      <Ionicons name="heart" size={24} color="#FE5F55" />
    ) : checked === "heart-dislike" ? (
      <Ionicons name="heart-dislike" size={24} color="#2B0300" />
    ) : null}
    </Pressable>
  );
}


const styles = StyleSheet.create({
  checkboxBase: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#5db0cd',
    backgroundColor: 'transparent',
  },

  checkboxChecked: {
    backgroundColor: '#5db0cd',
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