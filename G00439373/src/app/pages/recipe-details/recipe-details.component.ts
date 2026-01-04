import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RecipeService, RecipeDetail } from '../../services/recipe-service';  // Adjust imports

@Component({
  selector: 'app-recipe-details',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss'],
})
export class RecipeDetailsComponent implements OnInit {
  recipeId!: number;
  recipeDetail?: RecipeDetail;
  measurement: 'metric' | 'us' = 'metric';

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {}

  ngOnInit() {
    this.recipeId = Number(this.route.snapshot.paramMap.get('id'));
    
    // Load measurement from localStorage (default metric)
    const savedMeasurement = localStorage.getItem('measurement');
    if (savedMeasurement === 'us' || savedMeasurement === 'metric') {
      this.measurement = savedMeasurement;
    }

    this.loadRecipe();
  }

  loadRecipe() {
    this.recipeService.getRecipeDetails(this.recipeId).subscribe({
      next: (data) => {
        this.recipeDetail = data;
      },
      error: (err) => {
        console.error('Error fetching recipe details:', err);
      }
    });
  }
}
