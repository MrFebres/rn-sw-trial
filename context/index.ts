import { create } from 'zustand';

import { createCharacterSlice, CharacterSlice } from './characterSlice';
import { createSpeciesSlice, SpeciesSlice } from './speciesSlice';
import { PlanetSlice, createPlanetsSlice } from './planetsSlice';

type useMovieStoreType = CharacterSlice & PlanetSlice & SpeciesSlice;

export const useMovieStore = create<useMovieStoreType>()((...a) => ({
   ...createCharacterSlice(...a),
   ...createPlanetsSlice(...a),
   ...createSpeciesSlice(...a)
}));
