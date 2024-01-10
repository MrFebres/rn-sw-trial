import { StateCreator } from 'zustand';

import { Character } from '../types/characters';

export interface CharacterSlice {
   addCharacters: (characterList: Map<String, Character>) => void;
   characters: Map<String, Character>;
   isLoading: boolean;
   selectedCharacters: string[];
   setIsLoading: (isLoading: boolean) => void;
   setSelectedCharacters: (selectedItems: string[]) => void;
}

export const createCharacterSlice: StateCreator<CharacterSlice, [], [], CharacterSlice> = (
   set
) => ({
   addCharacters: (characterList: Map<String, Character>) =>
      set(() => ({ characters: new Map<String, Character>(characterList), isLoading: false })),
   characters: new Map<String, Character>(),
   isLoading: false,
   selectedCharacters: [],
   setIsLoading: (isLoading) => set(() => ({ isLoading })),
   setSelectedCharacters: (selectedCharacters) =>
      set(() => ({ selectedCharacters, characters: new Map<String, Character>() }))
});
