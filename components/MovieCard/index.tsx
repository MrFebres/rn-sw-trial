import React, { FC } from 'react';
import { Image, Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import dayjs from 'dayjs';

import { Film } from '../../types/films';
import { useMovieStore } from '../../context';
import MovieCardText from './MovieCardText';

require('dayjs/locale/es');

interface MovieCardProps {
   film: Film;
   uri: string;
}

const MovieCard: FC<MovieCardProps> = ({ film, uri }) => {
   const router = useRouter();
   const setCharacters = useMovieStore((state) => state.setSelectedCharacters);
   const setPlanets = useMovieStore((state) => state.setSelectedPlanets);
   const setSpecies = useMovieStore((state) => state.setSelectedSpecies);

   return (
      <Pressable
         onPress={() => {
            router.push({ pathname: 'detail', params: { ...film, uri } });
            setCharacters(film.characters);
            setPlanets(film.planets);
            setSpecies(film.species);
         }}>
         <View style={styles.container}>
            <Image style={styles.card} resizeMode="stretch" source={{ uri }} />
            <View style={{ flex: 1 }}>
               <Text style={styles.titleText}>{film.title}</Text>
               <MovieCardText label={'Director:'} text={film.director} />
               <MovieCardText label={'Productor:'} text={film.producer} />
               <MovieCardText
                  label={'Fecha de estreno:'}
                  text={dayjs(film.release_date, 'YYYY-MM-DD')
                     .locale('es')
                     .format('dddd, DD [de] MMMM [de] YYYY')}
               />
            </View>
         </View>
      </Pressable>
   );
};

export default MovieCard;

const styles = StyleSheet.create({
   container: {
      backgroundColor: 'white',
      borderRadius: 10,
      marginHorizontal: 10,
      marginVertical: 5,
      paddingBottom: 10,
      paddingHorizontal: 10,
      ...Platform.select({
         android: {
            elevation: 8
         },
         ios: {
            shadowColor: 'black',
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.3,
            shadowRadius: 2
         }
      })
   },
   card: {
      alignSelf: 'center',
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      flex: 1,
      height: 350,
      justifyContent: 'center',
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
