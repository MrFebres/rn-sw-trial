import { create } from 'zustand';

import { createCharacterSlice, CharacterSlice } from './characterSlice';
import { createPlanetsSlice, PlanetSlice } from './planetsSlice';
import { createSpeciesSlice, SpeciesSlice } from './speciesSlice';
import { createStarShipsSlice, StarShipsSlice } from './starshipsSlice';

export type UseMovieStoreType = CharacterSlice & PlanetSlice & SpeciesSlice & StarShipsSlice;

export const useMovieStore = create<UseMovieStoreType>()((...a) => ({
   ...createCharacterSlice(...a),
   ...createPlanetsSlice(...a),
   ...createSpeciesSlice(...a),
   ...createStarShipsSlice(...a)
}));
