import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  // for ngModel binding

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],  // add FormsModule here
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

  searchIngredients: string = '';

  // Fake recipes to display
  recipes = [
    {
      id: 1,
      title: 'Spaghetti Carbonara',
      image: 'https://spoonacular.com/recipeImages/716429-312x231.jpg',
    },
    {
      id: 2,
      title: 'Chicken Alfredo',
      image: 'https://spoonacular.com/recipeImages/715538-312x231.jpg',
    },
  ];

  onSearch() {
    
    console.log('Searching for:', this.searchIngredients);
  }
}
