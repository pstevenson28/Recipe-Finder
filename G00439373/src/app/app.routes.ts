import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RecipeDetailsComponent } from './pages/recipe-details/recipe-details.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { FavouritesComponent } from './pages/favourites/favourites.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', component: HomeComponent },
  { path: 'details/:id', component: RecipeDetailsComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'favourites', component: FavouritesComponent }
];
