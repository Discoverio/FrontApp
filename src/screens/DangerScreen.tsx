import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DangerButton from '../components/buttons/DangerButton';
import CircleIcon from '../components/CircleIcon';
import CloseButton from '../components/buttons/CloseButton';
import KittenList from '../components/KittenList';
import s from '../assets/styles/globalStyles';
import QuickInfoBoard from '../components/QuickInfoBoard';
import axios from 'axios';
import Constants from 'expo-constants';

// Fonction pour récupérer la valeur de objectUserId à partir du backend
async function fetchObjectUserId() {
  try {
    const response = await axios.get(`${Constants.manifest?.extra?.REACT_APP_BACKEND_ADRESS}/session/userId`);
    return response.data; // Valeur de objectUserId
    console.log(response.data);
    
  } catch (error) {
    console.error('Erreur lors de la récupération de objectUserId :', error);
    return "0"
    // Gérer l'erreur ou afficher un message approprié
  }
}

export const fetchDataForFirstName = async () => {
  const objectUserId = await fetchObjectUserId();
  return axios.get(`${Constants.manifest?.extra?.REACT_APP_BACKEND_ADRESS}/infos/profile/firstname/${objectUserId}`)
    .then(response => {
      // Récupérer la chaîne de caractères
      const firstName = response.data;
      
      // Utiliser la chaîne de caractères comme nécessaire
      console.log(firstName); // Affiche "John"

      // Retourner la chaîne de caractères si nécessaire
      return firstName;
    })
    .catch(error => {
      // Gérer les erreurs de requête
      console.error('Erreur lors de la requête:', error);
    });
};

export const fetchDataForLastName = async () => {
  const objectUserId = await fetchObjectUserId();
  return axios
    .get(`${Constants.manifest?.extra?.REACT_APP_BACKEND_ADRESS}/infos/profile/lastname/${objectUserId}`)
    .then(response => {
      // Récupérer la chaîne de caractères
      const lastName = response.data;
      
      // Utiliser la chaîne de caractères comme nécessaire
      console.log(lastName); // Affiche "Doe"

      // Retourner la chaîne de caractères si nécessaire
      return lastName;
    })
    .catch(error => {
      // Gérer les erreurs de requête
      console.error('Erreur lors de la requête:', error);
    });
};

const data = [
    { id: 1, title: 'Changer mon nom d\'utilisateur' },
    { id: 2, title: 'Changer mon mot de passe' },
    { id: 3, title: 'Changer mon adresse email' }
  ];

  const data2 = [
    { id: 1, title: 'Réinitialiser mes données' },
    { id: 4, title: 'Supprimer mon compte' }
  ];

  const fetchFullName = () => {
    return Promise.all([fetchDataForFirstName(), fetchDataForLastName()])
      .then(([firstName, lastName]) => {
        const fullName = `Hi ${firstName} ${lastName} !`;
        return fullName;
      })
      .catch(error => {
        // Gérer les erreurs de requête
        console.error('Erreur lors de la requête:', error);
      });
  };


const DangerScreen = () => {
  const [fullName, setFullName] = useState('');

  useEffect(() => {
    fetchFullName()
      .then(fullName => {
        setFullName(fullName);
      })
      .catch(error => {
        // Gérer les erreurs
        console.error('Erreur:', error);
      });
  }, []);


        return (
            <View style={s.backgroundColor}>
                {/* <HeaderApp /> */}
                <View style={{backgroundColor: "#cd655d"}}>
                                   
                    <Text style={[s.whiteColor, s.fs36, s.p4]}>{fullName}</Text>
                    {/* <Ionicons name="person-circle-outline" size={100} color="#fff" /> */}
                    <CircleIcon></CircleIcon> { /* mettre en paramètre la couleur #eedbdb */}
                    <CloseButton></CloseButton> 
                    {/* <List data={data} renderItem={renderItem} /> */}
                </View>
                <View>
                <QuickInfoBoard credits='1342' activities='1865123' color="#18206F"></QuickInfoBoard>
                    <View style={{margin:40}} >
                        <KittenList data={data}></KittenList>
                        <View style={{backgroundColor:'#db9d98', paddingTop:40, borderColor:'#FF0000', borderWidth:4}} >
                            <KittenList data={data2}></KittenList>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
  },
});


export default DangerScreen;
