import { UseQueryOptions, useQueries } from '@tanstack/react-query';

import { apiFetch } from '../services/api';

export const useGetQueriesById = <T>(queryKey: string, values: string[]): (T | undefined)[] => {
   const results = useQueries({
      queries: values.map<UseQueryOptions<T>>((film) => {
         const stringArr = film.split('/');
         const id = stringArr[stringArr.length - 2];

         return {
            queryFn: () => apiFetch('GET', `${queryKey}/${id}/`),
            queryKey: [`${queryKey}${id}`],
            refetchOnMount: false,
            refetchOnReconnect: false,
            refetchOnWindowFocus: false,
            staleTime: Infinity
         };
      })
   });

   return results.map((result) => result.data);
};
