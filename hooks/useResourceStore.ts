import { useEffect } from 'react';
import { UseQueryOptions, useQueries } from '@tanstack/react-query';

import { apiFetch } from '../services/api';
import { DataTypes, UseResourceParams } from '../types/useResourceStore';
import { useMovieStore } from '../context';

export const useResourceStore = <T extends DataTypes>({
   add,
   queryKey,
   selected,
   setLoader
}: UseResourceParams) => {
   const addItems = useMovieStore((state) => state[add]);
   const selectedItems = useMovieStore((state) => state[selected]);
   const setIsLoading = useMovieStore((state) => state[setLoader]);

   const results = useQueries({
      queries: selectedItems.map<UseQueryOptions<T>>((planet) => {
         const stringArr = planet.split('/');
         const itemId = stringArr[stringArr.length - 2];

         return {
            enabled: selectedItems.length > 0,
            queryFn: () => apiFetch('GET', `${queryKey}/${itemId}/`),
            queryKey: [`${queryKey}${itemId}`],
            refetchOnMount: false,
            refetchOnReconnect: false,
            refetchOnWindowFocus: false,
            staleTime: Infinity
         };
      })
   });

   useEffect(() => {
      if (results.some((person) => person.isLoading)) {
         setIsLoading(true);
      }

      if (results.every((person) => person.isSuccess)) {
         // eslint-disable-next-line @typescript-eslint/ban-ts-comment
         // @ts-ignore
         addItems(new Map<String, T>(results.map(({ data }) => [data!.url, data!])));
      }
   }, [results]);
};
