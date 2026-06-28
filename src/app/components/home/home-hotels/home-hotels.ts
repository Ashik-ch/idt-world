import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DESTINATIONS } from '../../../data/home.data';

@Component({
  selector: 'app-home-hotels',
  imports: [CommonModule],
  templateUrl: './home-hotels.html',
  styleUrl: './home-hotels.scss',
})
export class HomeHotels {

  destinations = DESTINATIONS;
  activeDestination: any = null;

  constructor(private readonly router: Router) { }

  categoryKeys(categories: any) {
    return Object.keys(categories);
  }

  openDestination(dest: any) {
    this.activeDestination = dest;
  }

  closeModal() {
    this.activeDestination = null;
  }

  goToHotel(resort: any) {
    console.log("resort", resort);

    if (!resort?.id) return;
    this.activeDestination = null;
    this.router.navigate(['/hotel', resort.id]);
  }
}
