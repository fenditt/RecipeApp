import { createStore, combineReducers } from 'redux';
import { favoriteRecipesReducer } from '../favRecipeSlice.js';
import { searchTermReducer } from '../searchSlice.js';
import { allRecipesReducer } from '../AllRecipesSlice.js';


export const store = createStore(combineReducers({
  favoriteRecipes: favoriteRecipesReducer,
  searchTerm: searchTermReducer,
  allRecipes: allRecipesReducer
}));