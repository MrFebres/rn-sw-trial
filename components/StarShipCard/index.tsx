import React, { FC } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import { Character } from '../../types/characters';
import { Film } from '../../types/films';
import { getPropByName } from '../../utils/getPropByName';
import { Starships } from '../../types/starships';
import { useGetQueriesById } from '../../hooks/useGetFilmsById';
import MovieCardText from '../MovieCard/MovieCardText';

require('dayjs/locale/es');

interface StarShipCardProps {
   starship: Starships;
}

const StarShipCard: FC<StarShipCardProps> = ({ starship }) => {
   const films = useGetQueriesById<Film>('films', starship.films);
   const people = useGetQueriesById<Character>('people', starship.pilots);

   return (
      <View style={styles.container}>
         <Text style={styles.titleText}>{starship.name}</Text>
         <MovieCardText label={'Capacidad de carga:'} text={starship.cargo_capacity} />
         <MovieCardText label={'Clase:'} text={starship.starship_class} />
         <MovieCardText label={'Consumibles:'} text={starship.consumables} />
         <MovieCardText label={'Costo en créditos:'} text={starship.cost_in_credits} />
         <MovieCardText label={'Longitud:'} text={starship.length} />
         <MovieCardText label={'Manufactura:'} text={starship.manufacturer} />
         <MovieCardText label={'Máxima velocidad:'} text={starship.max_atmosphering_speed} />
         <MovieCardText label={'MGLT:'} text={starship.MGLT} />
         <MovieCardText label={'Modelo:'} text={starship.model} />
         <MovieCardText label={'Pasajeros:'} text={starship.passengers} />
         <MovieCardText
            label={'Películas:'}
            style={{ alignItems: 'flex-start' }}
            text={getPropByName(films, 'title') || '--'}
         />
         <MovieCardText
            label={'Pilotos:'}
            style={{ alignItems: 'flex-start' }}
            text={getPropByName(people, 'name') || '--'}
         />
         <MovieCardText label={'Tripulación:'} text={starship.crew} />
         <MovieCardText
            label={'Valoración de hiper propulsor:'}
            text={starship.hyperdrive_rating}
         />
      </View>
   );
};

export default StarShipCard;

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
