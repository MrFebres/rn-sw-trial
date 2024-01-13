import React from 'react';
import { ActivityIndicator } from 'react-native';

import { FlashList } from '@shopify/flash-list';
import { useMovieStore } from '../../context';
import PlanetCard from '../../components/PlanetCard';

const PlanetsTab = () => {
   const planets = useMovieStore((state) => state.planets);
   const isLoading = useMovieStore((state) => state.isLoadingPlanets);

   if (isLoading) return <ActivityIndicator />;

   return (
      <FlashList
         contentContainerStyle={{ padding: 10 }}
         data={[...planets.values()]}
         estimatedItemSize={200}
         renderItem={({ item }) => <PlanetCard planet={item} />}
      />
   );
};

export default PlanetsTab;
