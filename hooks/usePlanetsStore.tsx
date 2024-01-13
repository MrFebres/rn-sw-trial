import { useEffect } from 'react';
import { UseQueryOptions, useQueries } from '@tanstack/react-query';

import { apiFetch } from '../services/api';
import { Planet } from '../types/planets';
import { useMovieStore } from '../context';

export const usePlanetStore = () => {
   const addPlanets = useMovieStore((state) => state.addPlanets);
   const selectedPlanets = useMovieStore((state) => state.selectedPlanets);
   const setIsLoading = useMovieStore((state) => state.setIsLoadingPlanets);

   const QUERY_KEY = 'planets';

   const results = useQueries({
      queries: selectedPlanets.map<UseQueryOptions<Planet>>((planet) => {
         const planetArr = planet.split('/');
         const planetId = planetArr[planetArr.length - 2];

         return {
            enabled: selectedPlanets.length > 0,
            queryFn: () => apiFetch('GET', `${QUERY_KEY}/${planetId}/`),
            queryKey: [`${QUERY_KEY}${planetId}`],
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
         addPlanets(new Map<String, Planet>(results.map(({ data }) => [data!.url, data!])));
      }
   }, [results]);
};
