import { UseQueryOptions, useQueries } from '@tanstack/react-query';

import { apiFetch } from '../services/api';
import { resources, Resources } from '../utils/resources';

export const useGetQueriesById = <T>(
   queryKey: keyof Resources,
   values: string[]
): (T | undefined)[] => {
   const key = resources[queryKey];

   const results = useQueries({
      queries: values.map<UseQueryOptions<T>>((film) => {
         const stringArr = film.split('/');
         const id = stringArr[stringArr.length - 2];

         return {
            queryFn: () => apiFetch('GET', `${key}/${id}/`),
            queryKey: [`${key}${id}`],
            refetchOnMount: false,
            refetchOnReconnect: false,
            refetchOnWindowFocus: false,
            staleTime: Infinity
         };
      })
   });

   return results.map((result) => result.data);
};
