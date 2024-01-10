import React from 'react';
import { Tabs } from 'expo-router';
import { AntDesign, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

export default function _layout() {
   return (
      <Tabs screenOptions={{ headerShown: false }}>
         <Tabs.Screen
            name="index"
            options={{
               tabBarLabel: 'Resumen',
               tabBarIcon: ({ color, focused }) => (
                  <AntDesign name="book" size={24} color={focused ? color : 'black'} />
               )
            }}
         />
         <Tabs.Screen
            name="characters"
            options={{
               tabBarLabel: 'Personajes',
               tabBarIcon: ({ color, focused }) => (
                  <Ionicons name="person-outline" size={24} color={focused ? color : 'black'} />
               )
            }}
         />
         <Tabs.Screen
            name="planets"
            options={{
               tabBarLabel: 'Planetas',
               tabBarIcon: ({ color, focused }) => (
                  <Ionicons name="planet-outline" size={24} color={focused ? color : 'black'} />
               )
            }}
         />
         <Tabs.Screen
            name="species"
            options={{
               tabBarLabel: 'Especies',
               tabBarIcon: ({ color, focused }) => (
                  <MaterialCommunityIcons
                     name="application-braces-outline"
                     size={24}
                     color={focused ? color : 'black'}
                  />
               )
            }}
         />
         <Tabs.Screen
            name="starships"
            options={{
               tabBarLabel: 'Naves',
               tabBarIcon: ({ color, focused }) => (
                  <MaterialCommunityIcons
                     name="shield-airplane-outline"
                     size={24}
                     color={focused ? color : 'black'}
                  />
               )
            }}
         />
      </Tabs>
   );
}
