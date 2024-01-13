import React from 'react';
import { ActivityIndicator } from 'react-native';
import { FlashList } from '@shopify/flash-list';

import { useMovieStore } from '../../context';
import SpeciesCard from '../../components/SpeciesCard';

const SpeciesTab = () => {
   const species = useMovieStore((state) => state.species);
   const isLoading = useMovieStore((state) => state.isLoadingSpecies);

   if (isLoading) return <ActivityIndicator />;

   return (
      <FlashList
         contentContainerStyle={{ padding: 10 }}
         data={[...species.values()]}
         estimatedItemSize={200}
         renderItem={({ item }) => <SpeciesCard species={item} />}
      />
   );
};

export default SpeciesTab;
