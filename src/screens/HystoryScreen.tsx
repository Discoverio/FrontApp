import React from 'react';
import s from '../assets/styles/globalStyles';
import { Text, View } from 'react-native';
import CircleIcon from '../components/CircleIcon';
import KittenList from '../components/KittenList';
import QuickInfoBoard from '../components/QuickInfoBoard';
import ClassicButton from '../components/buttons/ClassicButton';
import {fetchDataForHystory} from '../../../Backend/src/auth/profile/infos/export';

export class HystoryScreen extends React.Component<{}, State> {
      state = {
        data: [],
      };

      componentDidMount() {
        fetchDataForHystory()
          .then(data => {
            this.setState({ data });
          });
      }
      
      renderItem = ({ item }) => (
        <ListItem title={item.title} description={`Element ${item.id}`} />
      );

    render(): React {

        const { data } = this.state;

        return (
            <View style={s.backgroundColor}>
                {/* <HeaderApp /> */}
                <View style={s.secondarybackgroundColor}>
                                   
                    <Text style={[s.whiteColor, s.fs36, s.p4]}>History</Text>
                    {/* <Ionicons name="person-circle-outline" size={100} color="#fff" /> */}
                    <CircleIcon></CircleIcon> 
                    {/* <List data={data} renderItem={renderItem} /> */}
                </View>
                <View>
                <QuickInfoBoard credits='1342' activities='1865123' color="#18206F"></QuickInfoBoard>
                    <View style={{margin:40}} >
                        <KittenList data={data}></KittenList>
                        <ClassicButton title="Éditer mes favoris" />
                    </View>
                </View>
            </View>
        );
    }
}
