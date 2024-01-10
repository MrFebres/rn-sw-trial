import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Stack } from 'expo-router';

const queryClient = new QueryClient();

export default function _layout() {
   return (
      <QueryClientProvider client={queryClient}>
         <Stack>
            <Stack.Screen
               name="index"
               options={{
                  title: 'Home'
               }}
            />
            <Stack.Screen
               name="detail/index"
               options={{
                  title: 'Register'
               }}
            />
         </Stack>
      </QueryClientProvider>
   );
}
