import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Layout, Text, Image } from '@ui-kitten/components';
import s from '../assets/styles/globalStyles'
import MyLovebox from './buttons/lovebox';
import MyPlusbox from './buttons/plusbox';
import MyCheckbox from './buttons/checkbox';
import { getAlbumYear, isExplicit, getNbArtistFans, getArtistPictureSmall, getAlbumGenre } from '../../../BackEnd/src/services/musics/infos/export'

interface Props {
  album_id: string;
}

const DeezerWidget: React.FC<Props> = ({ album_id }) => {
  
  const [year, setYear] = useState<string | null>(null);
  
  useEffect(() => {
  const fetchYear = async () => {
  const year = await getAlbumYear(album_id);
  setYear(year);
  }
  fetchYear();
  }, [album_id]);


  const [explicit, setExplicit] = useState<string | null>(null);

  useEffect(() => {
    const fetchExplicit = async () => {
    const explicit = await isExplicit(album_id);
    setExplicit(explicit)
    }
    fetchExplicit();
  }, [album_id]);


  const [numberOfFans, setNumberOfFans] = useState<number>();

  useEffect(() => {
    getNbArtistFans(album_id) // Remplacez par votre deezer_album_id
      .then((result) => setNumberOfFans(result));
  }, [album_id]);


  const [artistAvatar, setArtistAvatar] = useState<number>();
  
  useEffect(() => {
    getArtistPictureSmall(album_id)
    .then((result) => setArtistAvatar(result));
  }, [album_id]);


  const [genreAlbum, setGenreAlbum] = useState<number>();
  
  useEffect(() => {
    getAlbumGenre(album_id)
    .then((result) => setGenreAlbum(result));
  }, [album_id]); 


  return (
    <Card style={s.m4}>
      <Card style={{ margin: 10, borderRadius: 10, overflow: 'hidden' }}>

        <Layout style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ flex: 1, marginRight: 5 }}>

            <Text category='h6'>{year}</Text>
            <Text category='h6'>{numberOfFans} fans</Text>
            <Text category='h6'>{explicit}</Text>

          </View>
          <View style={{ flex: 1, marginLeft: 5 }}>

            <Layout style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={{ flex: 1, marginRight: 5, }}>

                <View style={styles.genre_widget}>
                  <Text style={styles.text} numberOfLines={3}>{genreAlbum}</Text> {/* replace getGenre(album_id) */}
                </View>

              </View>
              <View style={{ flex: 1, marginLeft: 5 }}>
                <View style={styles.avatar_widget}>
                  <View >
                    <img src={artistAvatar} ></img> {/*replace getArtistAvatarFromAlbumId(album_id)*/}
                  </View>
                </View>
              </View>
            </Layout>
          </View>
        </Layout>

      </Card>

      <View style={s.m4}>
        <iframe
          id="deezer-widget"
          src={`https://widget.deezer.com/widget/dark/album/${album_id}?app_id=457142&autoplay=false&radius=true&tracklist=true`}
          allowtransparency="true"
          allowfullscreen="true"
          allow="encrypted-media"
          width="100%"
          height="100%"
        />
      </View>

      <Layout style={styles.interactives_widget} level='1'>
        <Layout style={styles.interactives_column}> <MyLovebox albumId={album_id} /> </Layout>
        <Layout style={styles.interactives_column}> <MyPlusbox /> </Layout>
        <Layout style={styles.interactives_column}> <MyCheckbox albumId={album_id} /> </Layout>
      </Layout>

    </Card>
  );
};

const styles = StyleSheet.create({
  genre_widget: {
    width: 60,
    height: 60,
    backgroundColor: '#174b6a',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  avatar_widget: {
    width: 90,
    height: 90,
    borderRadius: 8,
    overflow: 'hidden',
  },
  interactives_widget: {
    flex: 1,
    flexDirection: 'row',
    padding: 8
  },
  interactives_column: {
    flex: 1,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#4AA8B0',
    justifyContent: 'center',
    alignItems: 'center',
  }
});


export default DeezerWidget;
