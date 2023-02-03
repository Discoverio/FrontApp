import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import DeezerWidget from './deezerWidget';
import s from '../assets/styles/globalStyles';

export default function Card({bkgColor, borderColor}) {
  return (
      <View style={[styles.card, bkgColor, borderColor]}>
          <View>
              <Text style={[s.primaryColor, s.fs24, s.p4]}>Trip Tape II - Milky Chance</Text>

              <DeezerWidget album_id="352452547" />
              
              <Text style={[s.primaryColor, s.fs12, s.p4]}>Et omnia in potestate nostra esse natura liber, libera, libere valeant, sed illis non est in nostra potestate sunt infirmi, sevilis, licet, lex pertinet.</Text>
                 
              <View style={[styles.row, s.m4, s.w100, s.center]}></View>
          </View>
      </View>
  );
  }


const deviceWidth = Math.round(Dimensions.get('window').width)
const styles = StyleSheet.create({
    card: {
        width: deviceWidth - 50,
        alignSelf: 'center',
        borderRadius: 8,
        borderWidth: 1,
        textAlign: 'center',
    },
    row: {
        flexDirection: "row",
        flexWrap: "wrap",
        alignSelf: "center",
    },
});