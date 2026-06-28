import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { hotelsData } from '../../../data/hotels.data';
import { DESTINATIONS } from '../../../data/home.data';

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
    if (!id) return;

    // 1. Check hotels.data.ts (rich data: pros, cons, location, category)
    let matched: any = null;
    for (const dest of hotelsData) {
      if (dest.hotels && Array.isArray(dest.hotels)) {
        const found = dest.hotels.find((h: any) => h.id === id);
        if (found) { matched = found; break; }
      }
    }

    if (matched) {
      this.hotel = { ...matched, image: matched.image || 'assets/images/default-hotel.jpg' };
      return;
    }

    // 2. Fallback: check DESTINATIONS from home.data.ts (has image + desc)
    for (const dest of DESTINATIONS) {
      for (const catHotels of Object.values(dest.categories) as any[][]) {
        const found = catHotels.find((h: any) => h.id === id);
        if (found) {
          this.hotel = {
            id: found.id,
            name: found.name,
            image: found.image || 'assets/images/default-hotel.jpg',
            description: found.desc
          };
          return;
        }
      }
    }

    // 3. Last fallback: show minimal card
    this.hotel = { name: id, image: 'assets/images/default-hotel.jpg' };
  }

  goBack() {
    this.location.back();
  }
}
