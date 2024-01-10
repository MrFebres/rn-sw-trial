import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Stack } from 'expo-router';

const queryClient = new QueryClient();

export default function _layout() {
   return (
      <QueryClientProvider client={queryClient}>
         <Stack>
            <Stack.Screen
               name="index"
               options={{ headerTitle: 'Star Wars Wiki', headerTitleAlign: 'center' }}
            />
            <Stack.Screen
               name="detail/index"
               options={{
                  headerTitle: '',
                  headerTitleAlign: 'center',
                  headerTitleStyle: {
                     fontSize: 30,
                     fontWeight: 'bold'
                  }
               }}
            />
         </Stack>
      </QueryClientProvider>
   );
}
