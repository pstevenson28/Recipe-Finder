import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface RecipeSummary {
  id: number;
  title: string;
  image: string;
}

export interface RecipeDetail {
  id: number;
  title: string;
  image: string;
  extendedIngredients: {
    original: string;
    measures: {
      metric: { amount: number; unitLong: string };
      us: { amount: number; unitLong: string };
    };
  }[];
  analyzedInstructions: {
    steps: {
      number: number;
      step: string;
    }[];
  }[];
}

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private readonly apiKey = '70759a4f7911402abcc53d3c51d3b759';
  private readonly apiUrl = 'https://api.spoonacular.com/recipes/complexSearch';

  constructor(private http: HttpClient) {}

  searchRecipes(ingredients: string): Observable<{ results: RecipeSummary[] }> {
    const params = new HttpParams()
      .set('query', ingredients)
      .set('apiKey', this.apiKey);

    return this.http.get<{ results: RecipeSummary[] }>(this.apiUrl, { params });
  }

  getRecipeDetails(id: number): Observable<RecipeDetail> {
    const url = `https://api.spoonacular.com/recipes/${id}/information`;
    const params = new HttpParams().set('apiKey', this.apiKey);

    return this.http.get<RecipeDetail>(url, { params });
  }
}
