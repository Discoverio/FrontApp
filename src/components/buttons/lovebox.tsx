import React, { useState } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import s from '../../assets/styles/globalStyles';
import Ionicons from '@expo/vector-icons/Ionicons';
import { sendRequest } from '../../../../Backend/src/services/musics/interactions/checkbox';

export default function MyLovebox({ albumId }) {
  const [checked, onChange] = useState(false);

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
      sendRequest("liked", "POST", 1, { id: albumId });

    } else if (nextStep === "heart-dislike") {
      // Effectuer des opérations spécifiques à l'étape "heart-dislike"
      console.log("Cela fonctionne : Étape heart-dislike");
      sendRequest("liked", "DELETE", 1, { id: albumId });
      sendRequest("unliked", "POST", 1, { id: albumId });

    }else{
      // Effectuer des opérations spécifiques à l'étape "clear"      
      sendRequest("unliked", "DELETE", 1, { id: albumId });
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