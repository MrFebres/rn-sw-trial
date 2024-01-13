import React, { FC } from 'react';
import { ActivityIndicator, Platform, StyleSheet, Text, View } from 'react-native';

import { Character } from '../../types/characters';
import { Film } from '../../types/films';
import { getPropByName } from '../../utils/getPropByName';
import { Species } from '../../types/species';
import { useGetHomeWorld } from '../../hooks/useGetHomeWorld';
import { useGetQueriesById } from '../../hooks/useGetFilmsById';
import MovieCardText from '../MovieCard/MovieCardText';

require('dayjs/locale/es');

interface SpeciesCardProps {
   species: Species;
}

const SpeciesCard: FC<SpeciesCardProps> = ({ species }) => {
   const films = useGetQueriesById<Film>('films', species.films);
   const people = useGetQueriesById<Character>('people', species.people);

   const homeWorld = useGetHomeWorld(species.homeworld);

   return (
      <View style={styles.container}>
         <Text style={styles.titleText}>{species.name}</Text>
         <MovieCardText label={'Altura promedio:'} text={species.average_height} />
         <MovieCardText label={'Clasificación:'} text={species.classification} />
         <MovieCardText label={'Color de cabello:'} text={species.hair_colors} />
         <MovieCardText label={'Color de ojos:'} text={species.eye_colors} />
         <MovieCardText label={'Color de piel:'} text={species.skin_colors} />
         <MovieCardText label={'Designación:'} text={species.designation} />
         <MovieCardText label={'Lenguaje:'} text={species.language} />
         <MovieCardText
            label={'Películas:'}
            style={{ alignItems: 'flex-start' }}
            text={getPropByName(films, 'title')}
         />
         <MovieCardText
            label={'Personajes:'}
            style={{ alignItems: 'flex-start' }}
            text={getPropByName(people, 'name') || '--'}
         />
         {homeWorld ? (
            <MovieCardText label={'Planeta natal:'} text={homeWorld!.name} />
         ) : (
            <ActivityIndicator />
         )}
         <MovieCardText label={'Vida promedio:'} text={species.average_lifespan} />
      </View>
   );
};

export default SpeciesCard;

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
