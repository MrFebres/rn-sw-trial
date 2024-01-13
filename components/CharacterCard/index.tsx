import React, { FC } from 'react';
import { ActivityIndicator, Platform, StyleSheet, Text, View } from 'react-native';

import { apiFetch } from '../../services/api';
import { Character } from '../../types/characters';
import { Film } from '../../types/films';
import { getPropByName } from '../../utils/getPropByName';
import { Planet } from '../../types/planets';
import { Starships } from '../../types/starships';
import { useGetQueriesById } from '../../hooks/useGetFilmsById';
import { useQuery } from '@tanstack/react-query';
import { Vehicles } from '../../types/vehicles';
import MovieCardText from '../MovieCard/MovieCardText';

require('dayjs/locale/es');

interface CharacterCardProps {
   character: Character;
}

const CharacterCard: FC<CharacterCardProps> = ({ character }) => {
   const homeworldArr = character.homeworld.split('/');
   const planetId = homeworldArr[homeworldArr.length - 2];

   const films = useGetQueriesById<Film>('films', character.films);
   const starships = useGetQueriesById<Starships>('starships', character.starships);
   const vehicles = useGetQueriesById<Vehicles>('vehicles', character.vehicles);

   const { data: homeWorld } = useQuery<Planet>({
      queryKey: [`planets${planetId}`],
      queryFn: () => apiFetch('GET', character.homeworld),
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity
   });

   return (
      <View style={styles.container}>
         <Text style={styles.titleText}>{character.name}</Text>
         <MovieCardText label={'Color de cabello:'} text={character.hair_color} />
         <MovieCardText label={'Color de ojos:'} text={character.eye_color} />
         <MovieCardText label={'Estatura:'} text={character.height} />
         <MovieCardText label={'Género:'} text={character.gender} />
         <MovieCardText
            label={'Naves espaciales:'}
            style={{ alignItems: 'flex-start' }}
            text={getPropByName(starships, 'name') || '--'}
         />
         <MovieCardText
            label={'Películas:'}
            style={{ alignItems: 'flex-start' }}
            text={getPropByName(films, 'title')}
         />
         <MovieCardText label={'Peso:'} text={character.mass} />
         {homeWorld ? (
            <MovieCardText label={'Planeta natal:'} text={homeWorld!.name} />
         ) : (
            <ActivityIndicator />
         )}
         <MovieCardText
            label={'Vehículos:'}
            style={{ alignItems: 'flex-start' }}
            text={getPropByName(vehicles, 'name') || '--'}
         />
      </View>
   );
};

export default CharacterCard;

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
