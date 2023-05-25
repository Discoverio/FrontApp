import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CircleIcon from '../components/CircleIcon';
import SettingsButton from '../components/buttons/SettingsButton';
import KittenList from '../components/KittenList';
import s from '../assets/styles/globalStyles';
import QuickInfoBoard from '../components/QuickInfoBoard';
import DangerButton from '../components/buttons/DangerButton';
import { fetchDataForFirstName, fetchDataForLastName } from '../../../Backend/src/auth/profile/infos/export';

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
