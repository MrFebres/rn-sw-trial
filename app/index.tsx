import { ActivityIndicator, Button, Text } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import { Link } from 'expo-router';
import { useQuery } from '@tanstack/react-query';

import { ApiResponse, apiFetch } from '../services/api';
import { Films } from '../types/films';

export default function Page() {
   const { data, isLoading } = useQuery<ApiResponse<Films>>({
      queryFn: () => apiFetch('GET', 'films/'),
      queryKey: ['films'],
      refetchOnMount: false,
      refetchOnWindowFocus: false
   });

   if (isLoading) return <ActivityIndicator />;

   return (
      <>
         <Text>Page</Text>
         <Link href={'detail'} asChild>
            <Button title="Go to Detail Screen" />
         </Link>
         <FlashList
            data={data!.results}
            estimatedItemSize={200}
            renderItem={({ item }) => (
               <Text style={{ fontSize: 15, color: 'black' }}>{item.title}</Text>
            )}
         />
      </>
   );
}
