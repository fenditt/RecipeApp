import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addRecipe } from './favRecipeSlice.js';
import { loadData, selectFilteredAllRecipes } from './AllRecipesSlice.js';


const favoriteIconURL = 'https://i.postimg.cc/VL40MTrh/favicon-32x32.png';

export default function FavoriteButton({ children, onClickHandler, icon }) {
    return (
      <button className="favorite-button" onClick={onClickHandler}>
        <img className="heart-icon" alt="" src={icon} />
        {children}
      </button>
    );
  }


 export default function Recipe({ recipe, children }) {
    return (
      <div key={recipe.id} className="recipe" tabIndex={0}>
        <span className="recipe-container">
          <h3 className="recipe-name">{recipe.name}</h3>
          <div className="image-container">
            <img src={recipe.img} alt="" className="recipe-image" />
          </div>
        </span>
        {children}
      </div>
    );
  }

export const AllRecipes = () => {
  const allRecipes = useSelector(selectFilteredAllRecipes);
  const dispatch = useDispatch();

  const onFirstRender = () => {
    dispatch(loadData());
  }
  useEffect(onFirstRender, []);
  
  const onAddRecipeHandler = (recipe) => {
    dispatch(addRecipe(recipe));
  };

  return (
    <div className="recipes-container">
      {allRecipes.map((recipe) => (
        <Recipe recipe={recipe} key={recipe.id}>
          <FavoriteButton
            onClickHandler={() => onAddRecipeHandler(recipe)}
            icon={favoriteIconURL}
          >
            Add to Favorites
          </FavoriteButton>
        </Recipe>
      ))}
    </div>
  );
};