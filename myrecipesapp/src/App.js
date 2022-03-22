import React from 'react';
import { AllRecipes } from './AllRecipes.js';
import { SearchTerm } from './SearchEng.js';
import { FavoriteRecipes } from './FavRecipe.js';

export function App() {
  return (
    <main>
      <section>
        <SearchTerm />
      </section>
      <section><br />
        <h1><center>Yay, your favorite recipes!</center></h1><br />
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
