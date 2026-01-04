import { Injectable } from '@angular/core';

export interface FavouriteRecipe {
  id: number;
  title: string;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class FavouritesService {
  private storageKey = 'favouriteRecipes';
  private favourites: FavouriteRecipe[] = [];

  constructor() {
    this.loadFavourites();
  }

  private loadFavourites() {
    const saved = localStorage.getItem(this.storageKey);
    this.favourites = saved ? JSON.parse(saved) : [];
  }

  private saveFavourites() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.favourites));
  }

  getFavourites(): FavouriteRecipe[] {
    return [...this.favourites];  // return a copy to prevent external mutation
  }

  isFavourite(id: number): boolean {
    return this.favourites.some(r => r.id === id);
  }

  addFavourite(recipe: FavouriteRecipe) {
    if (!this.isFavourite(recipe.id)) {
      this.favourites.push(recipe);
      this.saveFavourites();
    }
  }

  removeFavourite(id: number) {
    this.favourites = this.favourites.filter(r => r.id !== id);
    this.saveFavourites();
  }

  clearFavourites() {
  this.favourites = [];
  this.saveFavourites();
}

}
