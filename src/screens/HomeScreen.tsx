import React from 'react';
import { Text, View } from 'react-native';
import DeezerWidget from '../components/deezerWidget';
import s from '../assets/styles/globalStyles'
import { Card } from '@ui-kitten/components';
import { getOneRandomAlbum } from '../../../BackEnd/src/services/musics/random/export.tsx';



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