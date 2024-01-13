import React from 'react';
import { ActivityIndicator } from 'react-native';
import { FlashList } from '@shopify/flash-list';

import { useMovieStore } from '../../context';
import CharacterCard from '../../components/CharacterCard';

const CharactersTab = () => {
   const characters = useMovieStore((state) => state.characters);
   const isLoading = useMovieStore((state) => state.isLoadingPlanets);

   if (isLoading) return <ActivityIndicator />;

   return (
      <FlashList
         contentContainerStyle={{ padding: 10 }}
         data={[...characters.values()]}
         estimatedItemSize={200}
         renderItem={({ item }) => <CharacterCard character={item} />}
      />
   );
};

export default CharactersTab;
