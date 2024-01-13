import { StateCreator } from 'zustand';

import { Character } from '../types/characters';

export interface CharacterSlice {
   addCharacters: (characterList: Map<String, Character>) => void;
   characters: Map<String, Character>;
   isLoadingCharacters: boolean;
   selectedCharacters: string[];
   setIsLoadingCharacters: (isLoading: boolean) => void;
   setSelectedCharacters: (selectedItems: string[]) => void;
}

export const createCharacterSlice: StateCreator<CharacterSlice, [], [], CharacterSlice> = (
   set
) => ({
   addCharacters: (characterList: Map<String, Character>) =>
      set(() => ({
         characters: new Map<String, Character>(characterList),
         isLoadingCharacters: false
      })),
   characters: new Map<String, Character>(),
   isLoadingCharacters: false,
   selectedCharacters: [],
   setIsLoadingCharacters: (isLoading) => set(() => ({ isLoadingCharacters: isLoading })),
   setSelectedCharacters: (selectedCharacters) =>
      set(() => ({ selectedCharacters, characters: new Map<String, Character>() }))
});
