import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Layout, Text, Image } from '@ui-kitten/components';
import s from '../assets/styles/globalStyles'
import MyLovebox from './buttons/lovebox';
import MyPlusbox from './buttons/plusbox';
import MyCheckbox from './buttons/checkbox';
import axios from 'axios';
import Constants from 'expo-constants';

/**
 * Cette fonction prend un deezer_album_id comme argument, obtient l'année d'un album à partir de l'API Deezer.
 * @param deezer_album_id - l'id de l'album dont on souhaite obtenir l'année.
 * @returns L'année de l'album.
 */
export async function getAlbumTitle(deezer_album_id: any) {

  try {

    const response = await axios.get(`${Constants.manifest?.extra?.REACT_APP_BACKEND_ADRESS}/infos/album/title/${deezer_album_id}`);
    return response.data;

  } catch (error) {

    console.error(error);
    return '';

  }
};

/**
 * Cette fonction prend un deezer_album_id comme argument, obtient l'année d'un album à partir de l'API Deezer.
 * @param deezer_album_id - l'id de l'album dont on souhaite obtenir l'année.
 * @returns L'année de l'album.
 */
export async function getAlbumYear(deezer_album_id: string) {

  try {

    const response = await axios.get(`${Constants.manifest?.extra?.REACT_APP_BACKEND_ADRESS}/infos/album/year/${deezer_album_id}`);
    return response.data;

  } catch (error) {

    console.error(error);
    return '';

  }
};

/**
* Cette fonction prend un deezer_album_id comme argument, fait deux appels API et retourne le nom du genre de l'album.
 * @param deezer_album_id - l'id de l'album pour obtenir le genre.
 * @returns Le genre de l'album.
 */
export async function getAlbumGenre(deezer_album_id: string) {

  try {

    const response = await axios.get(`${Constants.manifest?.extra?.REACT_APP_BACKEND_ADRESS}/infos/album/genre/${deezer_album_id}`);
    return response.data;

  } catch (error) {

    console.error(error);
    return '';

  }  
}

/**
 * Cette fonction prend un deezer_album_id comme argument, récupère l'identifiant de l'artiste dans l'album,
 * puis obtient le nombre de fans de l'artiste.
 * @param deezer_album_id - l'id de l'album pour lequel on souhaite obtenir le nombre de fans.
 * @returns Le nombre de fans de l'artiste de l'album.
 */
export async function getNbArtistFans(deezer_album_id: string) {
  try {
    const query_album = `https://api.deezer.com/album/${deezer_album_id}`;
    const albumResponse = await axios.get(query_album);
    console.log(`https://api.deezer.com/album/${deezer_album_id}`);
    const artistId = albumResponse.data.artist.id;
    const artistResponse = await axios.get(`https://api.deezer.com/artist/${artistId}`);
    const numberOfFans = artistResponse.data.nb_fan;
    console.log(`Le nombre de fans de ${artistResponse.data.name} est de ${numberOfFans}`);
    return numberOfFans;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

/**
 * Cette fonction prend un deezer_album_id comme argument, renvoie du texte pour indiquer si les paroles sont explicites on non.
 * @param deezer_album_id - l'id de l'album pour lequel on souhaite obtenir le status des paroles.
 * @returns « Explicit » ou « ».
 */
export async function isExplicit(deezer_album_id: string) {

  try {

    const response = await axios.get(`${Constants.manifest?.extra?.REACT_APP_BACKEND_ADRESS}/infos/album/explicit/${deezer_album_id}`);
    return response.data;

  } catch (error) {

    console.error(error);
    return '';

  }
};

/**
 * Cette fonction prend un deezer_album_id comme argument, récupère l'identifiant de l'artiste à partir de l'album, 
 * puis récupère la petite image de l'artiste.
 * @param deezer_album_id - l'id de l'album dont on souhaite obtenir l'image de l'artiste.
 * @returns La petite image de l'artiste.
 */
export async function getArtistPictureSmall(deezer_album_id: string) {
  try {
    const query_album = `https://api.deezer.com/album/${deezer_album_id}`;
    const albumResponse = await axios.get(query_album);
    const artistId = albumResponse.data.artist.id;
    const artistResponse = await axios.get(`https://api.deezer.com/artist/${artistId}`);
    const pictureSmall = artistResponse.data.picture_small;
    console.log(`La petite image de ${artistResponse.data.name} est ${pictureSmall}`);
    return pictureSmall;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

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
