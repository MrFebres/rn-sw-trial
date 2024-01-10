import { UseQueryOptions, useQueries } from '@tanstack/react-query';

import { useMovieStore } from '../context';
import { Character } from '../types/characters';
import { apiFetch } from '../services/api';

export const useCharacterStore = () => {
   const addCharacters = useMovieStore((state) => state.addCharacters);
   const isLoading = useMovieStore((state) => state.isLoading);
   const selectedCharacters = useMovieStore((state) => state.selectedCharacters);
   const setIsLoading = useMovieStore((state) => state.setIsLoading);

   const result = useQueries({
      queries: selectedCharacters.map<UseQueryOptions<Character>>((planet) => {
         const planetArr = planet.split('/');
         const planetId = planetArr[planetArr.length - 2];

         return {
            enabled: selectedCharacters.length > 0,
            queryFn: () => apiFetch('GET', `people/${planetId}/`),
            queryKey: [`planet${planetId}`],
            refetchOnMount: false,
            refetchOnReconnect: false,
            refetchOnWindowFocus: false
         };
      })
   });

   if (result.some((person) => person.isLoading) && !isLoading) {
      setIsLoading(true);
   }

   if (result.every((person) => person.isSuccess)) {
      console.log('[GOT HERE]');

      addCharacters(
         new Map<String, Character>(result.map((person) => [person.data!.url, person.data!]))
      );
   }
};
