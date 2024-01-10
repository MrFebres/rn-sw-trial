import React, { FC } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import { Character } from '../../types/characters';
import MovieCardText from '../MovieCard/MovieCardText';

require('dayjs/locale/es');

interface CharacterCardProps {
   character: Character;
}

const CharacterCard: FC<CharacterCardProps> = ({ character }) => {
   return (
      <View style={styles.container}>
         <Text style={styles.titleText}>{character.name}</Text>
         <MovieCardText label={'Color de cabello:'} text={character.hair_color} />
         <MovieCardText label={'Color de ojos:'} text={character.eye_color} />
         <MovieCardText label={'Estatura:'} text={character.height} />
         <MovieCardText label={'Género:'} text={character.gender} />
         <MovieCardText label={'Peso:'} text={character.mass} />
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
