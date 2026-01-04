import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {
  measurement: 'metric' | 'us' = 'metric';

  constructor() {
    // Load saved measurement from localStorage (or default to 'metric')
    const saved = localStorage.getItem('measurement');
    if (saved === 'metric' || saved === 'us') {
      this.measurement = saved;
    }
  }

  onMeasurementChange() {
    localStorage.setItem('measurement', this.measurement);
  }
}
