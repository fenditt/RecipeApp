import { selectSearchTerm } from './searchSlice.js';

const allRecipesData = [
  { id: 0, name: 'Biscuits', img: 'img/biscuits.jpg'},
  { id: 1, name: 'Bulgogi', img: 'img/bulgogi.jpg'},
  { id: 2, name: 'Calamari', img: 'img/calamari.jpg'},
  { id: 3, name: 'Ceviche', img: 'img/ceviche.jpg'},
  { id: 4, name: 'Cheeseburger', img: 'img/cheeseburger.jpg'},
  { id: 5, name: 'Churrasco', img: 'img/churrasco.jpg'},
  { id: 6, name: 'Dumplings', img: 'img/dumplings.jpg'},
  { id: 7, name: 'Fish & Chips', img: 'img/fishnchips.jpg'},
  { id: 8, name: 'Hummus', img: 'img/hummus.jpg'},
  { id: 9, name: 'Masala Dosa', img: 'img/masaladosa.jpg'},
  { id: 10, name: 'Pad Thai', img: 'img/padthai.jpg'},
];


export const loadData = () => {
  return {
    type: 'allRecipes/loadData',
    payload: allRecipesData
  }
}

const initialState = [];
export const allRecipesReducer = (allRecipes = initialState, action) => {
  switch (action.type) {
    case 'allRecipes/loadData':
      return action.payload;
    case 'favoriteRecipes/addRecipe':
      return allRecipes.filter(recipe => recipe.id !== action.payload.id);
    case 'favoriteRecipes/removeRecipe':
      return [...allRecipes, action.payload]
    default:
      return allRecipes;
  }
}

export const selectAllRecipes = (state) => state.allRecipes;

export const selectFilteredAllRecipes = (state) => {
  const allRecipes = selectAllRecipes(state);
  const searchTerm = selectSearchTerm(state);

  return allRecipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
};