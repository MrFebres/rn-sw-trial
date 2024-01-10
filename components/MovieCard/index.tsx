import React, { FC } from 'react';
import { Image, Platform, StyleSheet, Text, View } from 'react-native';
import dayjs from 'dayjs';

import { Films } from '../../types/films';
import MovieCardText from './MovieCardText';

require('dayjs/locale/es');

interface MovieCardProps {
   film: Films;
   uri: string;
}

const MovieCard: FC<MovieCardProps> = ({ film, uri }) => {
   return (
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
