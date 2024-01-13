import { useQuery } from '@tanstack/react-query';

import { apiFetch } from '../services/api';
import { Planet } from '../types/planets';

export const useGetHomeWorld = (homeworld: string) => {
   const homeworldArr = homeworld.split('/');
   const planetId = homeworldArr[homeworldArr.length - 2];

   const { data } = useQuery<Planet>({
      queryKey: [`planets${planetId}`],
      queryFn: () => apiFetch('GET', homeworld),
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity
   });

   return data;
};
