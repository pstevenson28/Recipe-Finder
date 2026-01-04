import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.component').then(m => m.HomeComponent),
  },
  {
    path: 'details/:id',
    loadComponent: () =>
      import('./pages/recipe-details/recipe-details.component').then(m => m.RecipeDetailsComponent),
  },
  {
    path: 'settings',
    loadComponent: () =>
      import('./pages/settings/settings.component').then(m => m.SettingsComponent),
  },
  {
    path: 'favourites',
    loadComponent: () =>
      import('./pages/favourites/favourites.component').then(m => m.FavouritesComponent),
  },
];
