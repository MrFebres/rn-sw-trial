import React from 'react';
import { ActivityIndicator } from 'react-native';
import { FlashList } from '@shopify/flash-list';

import { useMovieStore } from '../../context';
import StarShipCard from '../../components/StarShipCard';

const StarshipsTab = () => {
   const starships = useMovieStore((state) => state.starShips);
   const isLoading = useMovieStore((state) => state.isLoadingStarShips);

   if (isLoading) return <ActivityIndicator />;

   return (
      <FlashList
         contentContainerStyle={{ padding: 10 }}
         data={[...starships.values()]}
         estimatedItemSize={200}
         renderItem={({ item }) => <StarShipCard starship={item} />}
      />
   );
};

export default StarshipsTab;
