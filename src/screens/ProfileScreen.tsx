import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CircleIcon from '../components/CircleIcon';
import SettingsButton from '../components/buttons/SettingsButton';
import KittenList from '../components/KittenList';
import s from '../assets/styles/globalStyles';
import QuickInfoBoard from '../components/QuickInfoBoard';
import DangerButton from '../components/buttons/DangerButton';
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
    { id: 1, title: 'Option 1' },
    { id: 2, title: 'Option 2' },
    { id: 3, title: 'Option 3' },
    { id: 4, title: 'Option 4' },
    { id: 5, title: 'Option 5' },
    { id: 6, title: 'Option 6' },
    { id: 7, title: 'Option 7' },
    { id: 8, title: 'Option 8' },
    { id: 9, title: 'Option 9' },
    { id: 10, title: 'Option 10' },
    { id: 11, title: 'Option 11' }, 
    { id: 12, title: 'Option 12' },
    { id: 13, title: 'Option 13' },    
  ];
  
  const renderItem = ({ item }) => (
    <ListItem title={item.title} description={`Option ${item.id}`} />
  );

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

const ProfileScreen = () => {
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
                <View style={{backgroundColor: "#5db0cd"}}>
                                   
                    <Text style={[s.whiteColor, s.fs36, s.p4]}>{fullName}</Text>
                    {/* <Ionicons name="person-circle-outline" size={100} color="#fff" /> */}
                    <CircleIcon></CircleIcon> { /* mettre en paramètre la couleur #eedbdb */}
                    <SettingsButton></SettingsButton> 
                    {/* <List data={data} renderItem={renderItem} /> */}
                </View>
                <View>
                <QuickInfoBoard credits='1342' activities='1865123' color="#18206F"></QuickInfoBoard>
                    <View style={{ margin: 40 }}>
                        <KittenList data={data} />
                        <DangerButton title="Éditer mes favoris" />
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


export default ProfileScreen;
