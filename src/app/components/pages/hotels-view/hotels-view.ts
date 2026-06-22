import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { hotelsData } from '../../../data/hotels.data';

@Component({
  selector: 'app-hotels-view',
  imports: [CommonModule],
  templateUrl: './hotels-view.html',
  styleUrl: './hotels-view.scss'
})
export class HotelsView implements OnInit {

  hotel: any | null = null;

  constructor(private route: ActivatedRoute, private location: Location) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    let matched: any = null;
    if (id) {
      for (const dest of hotelsData) {
        if (dest.hotels && Array.isArray(dest.hotels)) {
          const found = dest.hotels.find((h: any) => h.id === id);
          if (found) { matched = found; break; }
        }
      }
    }

    if (matched) {
      this.hotel = { ...matched, image: matched.image || 'assets/images/default-hotel.jpg' };
    } else if (id) {
      this.hotel = { name: id, image: 'assets/images/default-hotel.jpg' };
    }
  }

  goBack() {
    this.location.back();
  }
}
