import React from 'react';
import { ActivityIndicator, RefreshControl } from 'react-native';
import { FlashList, ListRenderItem } from '@shopify/flash-list';
import { useQuery } from '@tanstack/react-query';

import { ApiResponse, apiFetch } from '../services/api';
import { Film } from '../types/films';
import MovieCard from '../components/MovieCard';

const episodes = {
   1: 'https://lumiere-a.akamaihd.net/v1/images/EP1-IA-99993-RESIZED_f9ae99b6.jpeg',
   2: 'https://lumiere-a.akamaihd.net/v1/images/EP2-IA-69221-RESIZED_1e8e0971.jpeg',
   3: 'https://lumiere-a.akamaihd.net/v1/images/image_ff356cdb.jpeg',
   4: 'https://lumiere-a.akamaihd.net/v1/images/EP4_POS_2_D-RESIZED_f977074a.jpeg',
   5: 'https://lumiere-a.akamaihd.net/v1/images/image_ca7910bd.jpeg',
   6: 'https://lumiere-a.akamaihd.net/v1/images/EP6_POS_21_R-RESIZED_2873dc04.jpeg'
};

export default function Page() {
   const { data, isLoading, isRefetching, refetch } = useQuery<ApiResponse<Film>>({
      queryFn: () => apiFetch('GET', 'films/'),
      queryKey: ['films'],
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity
   });

   if (isLoading) return <ActivityIndicator />;

   const renderItem: ListRenderItem<Film> | null | undefined = ({ item }) => {
      const uri = (episodes as any)[item.episode_id] as string;

      return <MovieCard film={item} uri={uri} />;
   };

   return (
      <FlashList
         contentContainerStyle={{ padding: 10 }}
         data={data!.results}
         estimatedItemSize={200}
         refreshControl={<RefreshControl refreshing={isRefetching} onRefresh={refetch} />}
         renderItem={renderItem}
      />
   );
}
