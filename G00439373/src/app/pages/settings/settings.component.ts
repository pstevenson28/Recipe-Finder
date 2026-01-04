import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  templateUrl: './settings.component.html',
})
export class SettingsComponent {
  measurement = 'metric';
  darkMode = false;

  constructor() {
    const savedMeasurement = localStorage.getItem('measurement');
    this.measurement = savedMeasurement ?? 'metric';

    const savedDark = localStorage.getItem('darkMode');
    this.darkMode = savedDark === 'true';
    this.applyDarkMode();
  }

  onMeasurementChange() {
    localStorage.setItem('measurement', this.measurement);
  }

  toggleDarkMode() {
    localStorage.setItem('darkMode', String(this.darkMode));
    this.applyDarkMode();
  }

  private applyDarkMode() {
    document.body.classList.toggle('dark', this.darkMode);
  }
}
