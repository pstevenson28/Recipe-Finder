import { Component, OnInit } from '@angular/core';
import { IonHeader } from "@ionic/angular/standalone";
import { IonicModule } from "@ionic/angular";

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss'],
  imports: [IonHeader, IonicModule],
})
export class FavouritesComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
