import React, { FC } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import { Character } from '../../types/characters';
import { Film } from '../../types/films';
import { Planet } from '../../types/planets';
import { useGetQueriesById } from '../../hooks/useGetFilmsById';
import MovieCardText from '../MovieCard/MovieCardText';
import { getPropByName } from '../../utils/getPropByName';

require('dayjs/locale/es');

interface PlanetCardProps {
   planet: Planet;
}

const PlanetCard: FC<PlanetCardProps> = ({ planet }) => {
   const films = useGetQueriesById<Film>('films', planet.films);
   const people = useGetQueriesById<Character>('people', planet.residents);

   return (
      <View style={styles.container}>
         <Text style={styles.titleText}>{planet.name}</Text>
         <MovieCardText label={'Clima:'} text={planet.climate} />
         <MovieCardText label={'Diametro:'} text={planet.diameter} />
         <MovieCardText label={'Gravedad:'} text={planet.gravity} />
         <MovieCardText
            label={'Películas:'}
            style={{ alignItems: 'flex-start' }}
            text={getPropByName(films, 'title')}
         />
         <MovieCardText label={'Período de rotación:'} text={planet.rotation_period} />
         <MovieCardText label={'Período orbital:'} text={planet.orbital_period} />
         <MovieCardText label={'Población:'} text={planet.population} />
         <MovieCardText
            label={'Residentes:'}
            style={{ alignItems: 'flex-start' }}
            text={getPropByName(people, 'name') || '--'}
         />
         <MovieCardText label={'Superficie de agua:'} text={planet.surface_water} />
         <MovieCardText label={'Terreno:'} text={planet.terrain} />
      </View>
   );
};

export default PlanetCard;

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
