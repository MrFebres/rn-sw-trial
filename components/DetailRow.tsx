import React, { FC, ReactNode } from 'react';
import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';

interface DetailRowProps {
   children?: ReactNode;
   containerStyle?: StyleProp<ViewStyle>;
   label: string;
   text?: string;
}

const DetailRow: FC<DetailRowProps> = ({ children, containerStyle, label, text }) => {
   return (
      <View style={[styles.container, containerStyle]}>
         <Text style={[styles.text, { fontWeight: 'bold' }]}>{label}</Text>
         {children ? children : <Text style={styles.text}>{text}</Text>}
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
      fontSize: 16
   }
});

export default DetailRow;
