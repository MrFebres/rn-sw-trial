import React, { useEffect } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import dayjs from 'dayjs';

import { Film } from '../../types/films';
import { useCharacterStore } from '../../hooks/useCharacterStore';
import { usePlanetStore } from '../../hooks/usePlanetsStore';
import DetailRow from '../../components/DetailRow';

require('dayjs/locale/es');

export default function Detail() {
   const params = useLocalSearchParams();
   const film = params as unknown as Film;
   const navigation = useNavigation();

   useCharacterStore();
   usePlanetStore();

   const parseArrayString = (prop: string[]) =>
      (prop as unknown as string).split(',').length.toString();

   useEffect(() => {
      const parent = navigation.getParent();
      parent?.setOptions({ headerTitle: film.title });
   }, [navigation]);

   return (
      <View style={styles.mainView}>
         <ScrollView scrollEnabled nestedScrollEnabled showsVerticalScrollIndicator={false}>
            <Image style={styles.image} resizeMode="stretch" source={{ uri: film.uri }} />
            <DetailRow label={'Director:'} text={film.director} />
            <DetailRow label={'Productor:'} text={film.producer} />
            <DetailRow
               label={'Fecha de estreno:'}
               text={dayjs(film.release_date, 'YYYY-MM-DD')
                  .locale('es')
                  .format('dddd, DD [de] MMMM [de] YYYY')}
            />
            <DetailRow containerStyle={{ alignItems: 'flex-start' }} label={'Introducción'}>
               <View style={styles.opening_crawl_view}>
                  <ScrollView nestedScrollEnabled>
                     <Text style={styles.opening_crawl_text}>{film.opening_crawl}</Text>
                  </ScrollView>
               </View>
            </DetailRow>
            <DetailRow label={'Personajes presentes:'} text={parseArrayString(film.characters)} />
            <DetailRow label={'Planetas presentes:'} text={parseArrayString(film.planets)} />
            <DetailRow label={'Especies presentes:'} text={parseArrayString(film.species)} />
            <DetailRow label={'Naves presentes:'} text={parseArrayString(film.starships)} />
         </ScrollView>
      </View>
   );
}

const styles = StyleSheet.create({
   mainView: {
      alignItems: 'center',
      flex: 1,
      justifyContent: 'center',
      padding: 4
   },
   image: {
      alignSelf: 'center',
      aspectRatio: 3 / 4,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      justifyContent: 'center',
      width: '95%'
   },
   opening_crawl_text: {
      color: 'yellow',
      fontWeight: '600',
      padding: 6,
      textAlign: 'justify'
   },
   opening_crawl_view: {
      backgroundColor: 'black',
      borderRadius: 4,
      flex: 1,
      height: 150,
      width: '100%'
   },
   titleText: {
      fontSize: 35,
      fontWeight: 'bold',
      width: '100%',
      textAlign: 'center',
      marginBottom: 5
   }
});
