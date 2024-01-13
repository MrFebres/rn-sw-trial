import { useEffect } from 'react';
import { UseQueryOptions, useQueries } from '@tanstack/react-query';

import { useMovieStore } from '../context';
import { Character } from '../types/characters';
import { apiFetch } from '../services/api';

export const useCharacterStore = () => {
   const addCharacters = useMovieStore((state) => state.addCharacters);
   const selectedCharacters = useMovieStore((state) => state.selectedCharacters);
   const setIsLoading = useMovieStore((state) => state.setIsLoadingCharacters);

   const QUERY_KEY = 'people';

   const results = useQueries({
      queries: selectedCharacters.map<UseQueryOptions<Character>>((planet) => {
         const planetArr = planet.split('/');
         const characterId = planetArr[planetArr.length - 2];

         return {
            enabled: selectedCharacters.length > 0,
            queryFn: () => apiFetch('GET', `${QUERY_KEY}/${characterId}/`),
            queryKey: [`${QUERY_KEY}${characterId}`],
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
         addCharacters(new Map<String, Character>(results.map(({ data }) => [data!.url, data!])));
      }
   }, [results]);
};
