import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RecipeDetailsComponent } from './pages/recipe-details/recipe-details.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { FavouritesComponent } from './pages/favourites/favourites.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
  { path: 'details/:id', loadComponent: () => import('./pages/recipe-details/recipe-details.component').then(m => m.RecipeDetailsComponent) },
  { path: 'settings', loadComponent: () => import('./pages/settings/settings.component').then(m => m.SettingsComponent) },
  { path: 'favourites', loadComponent: () => import('./pages/favourites/favourites.component').then(m => m.FavouritesComponent) },
];

