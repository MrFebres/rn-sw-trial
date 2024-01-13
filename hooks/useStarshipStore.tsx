import { useEffect } from 'react';
import { UseQueryOptions, useQueries } from '@tanstack/react-query';

import { apiFetch } from '../services/api';
import { Starships } from '../types/starships';
import { useMovieStore } from '../context';

export const useStarshipStore = () => {
   const addStarShips = useMovieStore((state) => state.addStarShips);
   const selectedStarShips = useMovieStore((state) => state.selectedStarShips);
   const setIsLoading = useMovieStore((state) => state.setIsLoadingStarShips);

   const QUERY_KEY = 'starships';

   const results = useQueries({
      queries: selectedStarShips.map<UseQueryOptions<Starships>>((starships) => {
         const stringArr = starships.split('/');
         const id = stringArr[stringArr.length - 2];

         return {
            enabled: selectedStarShips.length > 0,
            queryFn: () => apiFetch('GET', `${QUERY_KEY}/${id}/`),
            queryKey: [`${QUERY_KEY}${id}`],
            refetchOnMount: false,
            refetchOnReconnect: false,
            refetchOnWindowFocus: false,
            staleTime: Infinity
         };
      })
   });

   useEffect(() => {
      if (results.some((planet) => planet.isLoading)) {
         setIsLoading(true);
      }

      if (results.every((planet) => planet.isSuccess)) {
         addStarShips(new Map<String, Starships>(results.map(({ data }) => [data!.url, data!])));
      }
   }, [results]);
};
