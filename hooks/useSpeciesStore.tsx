import { useEffect } from 'react';
import { UseQueryOptions, useQueries } from '@tanstack/react-query';

import { apiFetch } from '../services/api';
import { Species } from '../types/species';
import { useMovieStore } from '../context';

export const useSpeciesStore = () => {
   const addSpecies = useMovieStore((state) => state.addSpecies);
   const selectedSpecies = useMovieStore((state) => state.selectedSpecies);
   const setIsLoading = useMovieStore((state) => state.setIsLoadingSpecies);

   const QUERY_KEY = 'species';

   const results = useQueries({
      queries: selectedSpecies.map<UseQueryOptions<Species>>((species) => {
         const stringArr = species.split('/');
         const id = stringArr[stringArr.length - 2];

         return {
            enabled: selectedSpecies.length > 0,
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
         addSpecies(new Map<String, Species>(results.map(({ data }) => [data!.url, data!])));
      }
   }, [results]);
};
