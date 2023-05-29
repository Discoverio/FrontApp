import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DangerButton from '../components/buttons/DangerButton';
import CircleIcon from '../components/CircleIcon';
import CloseButton from '../components/buttons/CloseButton';
import KittenList from '../components/KittenList';
import s from '../assets/styles/globalStyles';
import QuickInfoBoard from '../components/QuickInfoBoard';

const data = [
    { id: 1, title: 'Changer mon nom d\'utilisateur' },
    { id: 2, title: 'Changer mon mot de passe' },
    { id: 3, title: 'Changer mon adresse email' }
  ];

  const data2 = [
    { id: 1, title: 'Réinitialiser mes données' },
    { id: 4, title: 'Supprimer mon compte' }
  ];


const DangerScreen = () => {
        return (
            <View style={s.backgroundColor}>
                {/* <HeaderApp /> */}
                <View style={{backgroundColor: "#cd655d"}}>
                                   
                    <Text style={[s.whiteColor, s.fs36, s.p4]}>Hi John Doe !</Text>
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
