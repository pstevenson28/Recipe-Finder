import { Component } from '@angular/core';
import { IonicModule, ToastController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { RecipeService, RecipeSummary } from '../../services/recipe-service';
import { FavouritesService, FavouriteRecipe } from '../../services/favourites.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, HttpClientModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  searchIngredients: string = '';
  recipes: RecipeSummary[] = [];

  constructor(
    private recipeService: RecipeService,
    private favouritesService: FavouritesService,
    private toastController: ToastController  // inject toast controller
  ) {}

  onSearch() {
    const trimmed = this.searchIngredients.trim();
    if (!trimmed) {
      this.recipes = [];
      return;
    }

    this.recipeService.searchRecipes(trimmed).subscribe({
      next: (response) => {
        this.recipes = response.results;
      },
      error: (err) => {
        console.error('API error', err);
        this.recipes = [];
      }
    });
  }

  async addToFavourites(recipe: RecipeSummary) {
    if (this.favouritesService.isFavourite(recipe.id)) {
      this.showToast('Recipe already in favourites');
      return;
    }

    const fav: FavouriteRecipe = {
      id: recipe.id,
      title: recipe.title,
      image: recipe.image,
    };

    this.favouritesService.addFavourite(fav);
    this.showToast('Recipe added to favourites');
  }

  private async showToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      position: 'bottom',
    });
    toast.present();
  }
}
