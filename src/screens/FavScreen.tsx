import React from 'react';
import s from '../assets/styles/globalStyles';
import { Text, View } from 'react-native';
import CircleIcon from '../components/CircleIcon';
import KittenList from '../components/KittenList';
import ClassicButton from '../components/buttons/ClassicButton';
import QuickInfoBoard from '../components/QuickInfoBoard';
import {fetchDataForFav} from '../../../Backend/src/auth/profile/infos/export';


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
