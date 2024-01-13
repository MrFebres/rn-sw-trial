import { create } from 'zustand';

import { createCharacterSlice, CharacterSlice } from './characterSlice';
import { PlanetSlice, createPlanetsSlice } from './planetsSlice';

type useMovieStoreType = CharacterSlice & PlanetSlice;

export const useMovieStore = create<useMovieStoreType>()((...a) => ({
   ...createCharacterSlice(...a),
   ...createPlanetsSlice(...a)
}));
