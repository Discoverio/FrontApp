import React from 'react';
import s from '../assets/styles/globalStyles';
import { Text, View } from 'react-native';
import CircleIcon from '../components/CircleIcon';
import KittenList from '../components/KittenList';
import ClassicButton from '../components/buttons/ClassicButton';
import QuickInfoBoard from '../components/QuickInfoBoard';
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

export const fetchDataForFav = async () => {
  const objectUserId = await fetchObjectUserId();
  return axios
    .get(`${Constants.manifest?.extra?.REACT_APP_BACKEND_ADRESS}/infos/profile/history/musics/liked/${objectUserId}`)
    .then(response => {
      const numbers = response.data;
      const promises = numbers.map((number, index) => {
        return axios.get(`${Constants.manifest?.extra?.REACT_APP_BACKEND_ADRESS}/infos/album/title/${number}`)
          .then(albumResponse => ({
            id: index + 1,
            title: albumResponse.data,
          }));
      });

      return Promise.all(promises);
    })
    .catch(error => {
      console.error(error);
      return [];
    });
};

export class FavScreen extends React.Component<{}, State> {
  state = {
    data: [],
  };

  componentDidMount() {
    fetchDataForFav()
      .then(data => {
        this.setState({ data });
      });
  }

  renderItem = ({ item }) => (
    <ListItem title={item.title} description={`Element ${item.id}`} />
  );

  render() {
    const { data } = this.state;

    return (
      <View style={s.backgroundColor}>
        <View style={s.secondarybackgroundColor}>
          <Text style={[s.whiteColor, s.fs36, s.p4]}>Your Fav</Text>
          <CircleIcon></CircleIcon>
        </View>
        <View>
          <QuickInfoBoard credits='1342' activities='1865123' color="#18206F"></QuickInfoBoard>
          <View style={{ margin: 40 }}>
            <KittenList data={data} />
            <ClassicButton title="Éditer mes favoris" />
          </View>
        </View>
      </View>
    );
  }
}
