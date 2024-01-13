import React, { FC } from 'react';
import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';

interface MovieCardTextProps {
   label: string;
   style?: StyleProp<ViewStyle>;
   text: string;
}

const MovieCardText: FC<MovieCardTextProps> = ({ label, style, text }) => {
   return (
      <View style={[styles.container, style]}>
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
   text: {
      color: 'black',
      flex: 1,
      fontSize: 15
   }
});

export default MovieCardText;
