import React from 'react';
import { Text, View } from 'react-native';
import DeezerWidget from '../components/deezerWidget';
import s from '../assets/styles/globalStyles'
import { Card } from '@ui-kitten/components';
import axios from 'axios';
import Constants from 'expo-constants';

// Fonction pour récupérer la valeur de objectUserId à partir du backend
async function fetchObjectUserId() {
  try {
    const response = await axios.get(`${Constants.manifest?.extra?.REACT_APP_BACKEND_ADRESS}/session/userId`);
    return response.data; // Valeur de objectUserId
    
    
  } catch (error) {
    console.error('Erreur lors de la récupération de objectUserId :', error);
    return "0"
    // Gérer l'erreur ou afficher un message approprié
  }
}


/**
 * Fonction sans paramètre retournant un enregistrement musical provenant de la base de données de Discoverio
 * Cette base contient des enregistrements musicaux ayant Deezer pour source.
 * @returns un identifiant d'enregistrement musical aléatoire.
 */
export async function getOneRandomAlbum() {
  const objectUserId = await fetchObjectUserId();
  try {

    const response = await axios.get(`${Constants.manifest?.extra?.REACT_APP_BACKEND_ADRESS}/music/random/${objectUserId}`);
    return response.data.id;

  } catch (error) {

    console.error(error);
    return '';
  }

};

interface State {
    randomAlbumId: string;
}
export class HomeScreen extends React.Component<{}, State> {
    constructor(props: {}) {
      super(props);
      this.state = { randomAlbumId: '' };
    }
  
    componentDidMount() {
        this.getOneRandomAlbum();
    }

    getOneRandomAlbum = async () => {
      const randomAlbumId = await getOneRandomAlbum();
      this.setState({ randomAlbumId });
    };
    


    render() {
      return (
        <View>
          <Card style={[s.m4, s.m0_b]}>
            <Text style={[s.backgroundColor, s.extraColor, s.fs36, s.p2, s.w700]}>Music</Text>
          </Card>
          <DeezerWidget album_id={this.state.randomAlbumId} />
          <Card style={[s.m4, s.m0_b]}>
            <Text style={[s.backgroundColor, s.extraColor, s.fs36, s.p2, s.w700]}>Movie</Text>
          </Card>
        </View>
      );
    }
  }