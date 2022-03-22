import React from 'react';
import { AllRecipes } from './AllRecipes';
import { SearchTerm } from './SearchEng';
import { FavoriteRecipes } from './FavRecipe';

export function App() {
  return (
    <main>
      <section>
        <SearchTerm />
      </section>
      <section>
        <h2>Yay, your favorite recipes!</h2>
        <FavoriteRecipes />
      </section>
      <hr />
      <section>
        <h2>All recipes</h2>
        <AllRecipes />
      </section>
    </main>
  )
}