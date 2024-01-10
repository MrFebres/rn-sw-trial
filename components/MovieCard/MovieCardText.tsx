import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface MovieCardTextProps {
   label: string;
   text: string;
}

const MovieCardText: FC<MovieCardTextProps> = ({ label, text }) => {
   return (
      <View style={styles.container}>
         <Text style={[styles.text, { fontWeight: 'bold' }]}>{label}</Text>
         <Text style={styles.text}>{text}</Text>
      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: 2.5
   },
   text: { flex: 1, fontSize: 15, color: 'black' }
});

export default MovieCardText;
