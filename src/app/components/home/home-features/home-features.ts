import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { features } from '../../../data/home.data';

@Component({
  selector: 'app-home-features',
  imports: [FormsModule, CommonModule],
  templateUrl: './home-features.html',
  styleUrl: './home-features.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class HomeFeatures {
  features = features;

}
