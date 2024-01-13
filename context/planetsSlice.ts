import { StateCreator } from 'zustand';

import { Planet } from '../types/planets';

export interface PlanetSlice {
   addPlanets: (planetList: Map<String, Planet>) => void;
   planets: Map<String, Planet>;
   isLoadingPlanets: boolean;
   selectedPlanets: string[];
   setIsLoadingPlanets: (isLoading: boolean) => void;
   setSelectedPlanets: (selectedItems: string[]) => void;
}

export const createPlanetsSlice: StateCreator<PlanetSlice, [], [], PlanetSlice> = (set) => ({
   addPlanets: (characterList: Map<String, Planet>) =>
      set(() => ({ planets: new Map<String, Planet>(characterList), isLoadingPlanets: false })),
   planets: new Map<String, Planet>(),
   isLoadingPlanets: false,
   selectedPlanets: [],
   setIsLoadingPlanets: (isLoading) => set(() => ({ isLoadingPlanets: isLoading })),
   setSelectedPlanets: (selectedPlanets) =>
      set(() => ({ selectedPlanets, planets: new Map<String, Planet>() }))
});
