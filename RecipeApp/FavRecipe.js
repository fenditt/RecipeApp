import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeRecipe, selectFilteredFavoriteRecipes } from './favRecipeSlice.js';
import FavoriteButton from "./AllRecipes.js";
import Recipe from "./AllRecipes.js";
const unfavoriteIconUrl = 'https://i.postimg.cc/VL40MTrh/favicon-32x32.png';

export const FavoriteRecipes = () =>{
  const favoriteRecipes = useSelector(selectFilteredFavoriteRecipes);
  const dispatch = useDispatch();

  const onRemoveRecipeHandler = (recipe) => {
    dispatch(removeRecipe(recipe));
  };

  return (
    <div className="recipes-container">
      {favoriteRecipes.map(createRecipeComponent)}
    </div>
  );

  // Helper Function
  function createRecipeComponent(recipe) {
    return (
      <Recipe recipe={recipe} key={recipe.id}>
        <FavoriteButton
          onClickHandler={() => onRemoveRecipeHandler(recipe)}
          icon={unfavoriteIconUrl}
        >
          Remove Favorite
        </FavoriteButton>
      </Recipe>
    )
  } 
};