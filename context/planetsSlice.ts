import { StateCreator } from 'zustand';

import { Planet } from '../types/planets';

export interface PlanetSlice {
   addPlanets: (planetList: Map<String, Planet>) => void;
   isLoadingPlanets: boolean;
   planets: Map<String, Planet>;
   selectedPlanets: string[];
   setIsLoadingPlanets: (isLoading: boolean) => void;
   setSelectedPlanets: (selectedItems: string[]) => void;
}

export const createPlanetsSlice: StateCreator<PlanetSlice, [], [], PlanetSlice> = (set) => ({
   addPlanets: (characterList: Map<String, Planet>) =>
      set(() => ({ planets: new Map<String, Planet>(characterList), isLoadingPlanets: false })),
   isLoadingPlanets: false,
   planets: new Map<String, Planet>(),
   selectedPlanets: [],
   setIsLoadingPlanets: (isLoading) => set(() => ({ isLoadingPlanets: isLoading })),
   setSelectedPlanets: (selectedPlanets) =>
      set(() => ({ selectedPlanets, planets: new Map<String, Planet>() }))
});
