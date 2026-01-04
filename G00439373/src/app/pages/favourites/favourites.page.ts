import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FavouritesService, FavouriteRecipe } from '../../services/favourites.service';

@Component({
  selector: 'app-favourites',
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule],
  templateUrl: './favourites.page.html',
  styleUrls: ['./favourites.page.scss'],
})
export class FavouritesPage {
  favourites: FavouriteRecipe[] = [];

  constructor(private favouritesService: FavouritesService) {}

  ionViewWillEnter() {
    // Load favourites each time the page comes into view
    this.favourites = this.favouritesService.getFavourites();
  }

  remove(id: number) {
    this.favouritesService.removeFavourite(id);
    this.favourites = this.favouritesService.getFavourites();
  }
}
