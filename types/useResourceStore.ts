import { Resources } from '../utils/resources';
import { UseMovieStoreType } from '../context';
import { Character } from './characters';
import { Planet } from './planets';
import { Species } from './species';
import { Starships } from './starships';

export type AddToStore = keyof UseMovieStoreType extends infer K
   ? K extends 'addCharacters' | 'addPlanets' | 'addSpecies' | 'addStarShips'
      ? K
      : never
   : never;

export type SelectedStoreItems = keyof UseMovieStoreType extends infer K
   ? K extends 'selectedCharacters' | 'selectedPlanets' | 'selectedSpecies' | 'selectedStarShips'
      ? K
      : never
   : never;

export type SetIsLoading = keyof UseMovieStoreType extends infer K
   ? K extends
        | 'setIsLoadingCharacters'
        | 'setIsLoadingPlanets'
        | 'setIsLoadingSpecies'
        | 'setIsLoadingStarShips'
      ? K
      : never
   : never;

export type DataTypes = Character | Planet | Species | Starships;

export interface UseResourceParams {
   add: AddToStore;
   queryKey: keyof Resources;
   selected: SelectedStoreItems;
   setLoader: SetIsLoading;
}
