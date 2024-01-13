import { StateCreator } from 'zustand';

import { Starships } from '../types/starships';

export interface StarShipsSlice {
   addStarShips: (shipList: Map<String, Starships>) => void;
   isLoadingStarShips: boolean;
   selectedStarShips: string[];
   setIsLoadingStarShips: (isLoading: boolean) => void;
   setSelectedStarShips: (selectedItems: string[]) => void;
   starShips: Map<String, Starships>;
}

export const createStarShipsSlice: StateCreator<StarShipsSlice, [], [], StarShipsSlice> = (
   set
) => ({
   addStarShips: (shipList: Map<String, Starships>) =>
      set(() => ({ starShips: new Map<String, Starships>(shipList), isLoadingStarShips: false })),
   isLoadingStarShips: false,
   selectedStarShips: [],
   setIsLoadingStarShips: (isLoading) => set(() => ({ isLoadingStarShips: isLoading })),
   setSelectedStarShips: (selectedStarShips) =>
      set(() => ({ selectedStarShips, starShips: new Map<String, Starships>() })),
   starShips: new Map<String, Starships>()
});
