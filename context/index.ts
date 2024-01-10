import { create } from 'zustand';

import { createCharacterSlice, CharacterSlice } from './characterSlice';

export const useMovieStore = create<CharacterSlice>()((...a) => ({
   ...createCharacterSlice(...a)
}));
