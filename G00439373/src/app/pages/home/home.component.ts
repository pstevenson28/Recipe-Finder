import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RecipeService, RecipeSummary } from '../../services/recipe-service';  

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, HttpClientModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  searchIngredients: string = '';
  recipes: RecipeSummary[] = [];

  constructor(private recipeService: RecipeService) {}

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
}
