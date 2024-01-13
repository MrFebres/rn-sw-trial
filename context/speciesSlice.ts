import { StateCreator } from 'zustand';

import { Species } from '../types/species';

export interface SpeciesSlice {
   addSpecies: (speciesList: Map<String, Species>) => void;
   isLoadingSpecies: boolean;
   selectedSpecies: string[];
   setIsLoadingSpecies: (isLoading: boolean) => void;
   setSelectedSpecies: (selectedItems: string[]) => void;
   species: Map<String, Species>;
}

export const createSpeciesSlice: StateCreator<SpeciesSlice, [], [], SpeciesSlice> = (set) => ({
   addSpecies: (speciesList: Map<String, Species>) =>
      set(() => ({ species: new Map<String, Species>(speciesList), isLoadingSpecies: false })),
   isLoadingSpecies: false,
   selectedSpecies: [],
   setIsLoadingSpecies: (isLoading) => set(() => ({ isLoadingSpecies: isLoading })),
   setSelectedSpecies: (selectedSpeciess) =>
      set(() => ({ selectedSpecies: selectedSpeciess, species: new Map<String, Species>() })),
   species: new Map<String, Species>()
});
