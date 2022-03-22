import { selectSearchTerm } from './searchSlice.js';

const allRecipesData = [
  { id: 0, name: 'Pound Cake', img: 'https://images.aws.nestle.recipes/resized/577d904b3615be9289bfbed07c398b42__0000s_0016_4-_Budin_Facil4_1200_600.jpg'},
  { id: 1, name: 'Cookies', img: 'https://images.pexels.com/photos/890577/pexels-photo-890577.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
  { id: 2, name: 'Macarons', img: 'https://images.pexels.com/photos/8520897/pexels-photo-8520897.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
  { id: 3, name: 'Risotto', img: 'https://images.pexels.com/photos/9058939/pexels-photo-9058939.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
  { id: 4, name: 'Lasagna', img: 'https://images.pexels.com/photos/6046493/pexels-photo-6046493.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
  { id: 5, name: 'Medialunas', img: 'https://www.clarin.com/img/2013/10/13/las-medialunas-un-clasico-que___r1mfUtu3mg_1256x620.jpg'},
  { id: 6, name: 'Scons', img: 'https://www.rionegro.com.ar/wp-content/uploads/2021/03/scons1.png'},
  { id: 7, name: 'Hamburguers', img: 'https://images.pexels.com/photos/8305728/pexels-photo-8305728.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
  { id: 8, name: 'Hummus', img: 'https://images.pexels.com/photos/1618898/pexels-photo-1618898.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
  { id: 9, name: 'Pizza', img: 'https://images.pexels.com/photos/2619967/pexels-photo-2619967.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
  { id: 10, name: 'Spaghetti', img: 'https://images.pexels.com/photos/47306/pasta-spaghetti-noodle-pasta-nests-47306.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
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