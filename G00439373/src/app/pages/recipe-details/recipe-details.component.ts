import { Component, OnInit } from '@angular/core';
import { IonHeader } from "@ionic/angular/standalone";
import { IonicModule } from "@ionic/angular";

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss'],
  imports: [IonHeader, IonicModule],
})
export class RecipeDetailsComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
