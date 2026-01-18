import { CommonModule } from '@angular/common';
import { Component, } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DESTINATIONS, } from '../../../data/home.data';

@Component({
  selector: 'app-home-hotels',
  imports: [CommonModule, FormsModule,],
  templateUrl: './home-hotels.html',
  styleUrl: './home-hotels.scss',
})
export class HomeHotels {


  ngOnInit() { }

  destinations = DESTINATIONS;
  activeDestination: any = null;
  openResort: any = null;

  categoryKeys(categories: any) {
    return Object.keys(categories);
  }

  openDestination(dest: any) {
    this.activeDestination = dest;
    this.openResort = null;
  }

  closeModal() {
    this.activeDestination = null;
    this.openResort = null;
  }

  toggleResort(resort: any) {
    this.openResort = this.openResort === resort ? null : resort;
  }

} 