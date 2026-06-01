import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HotelsView } from "../../../pages/hotels-view/hotels-view";
import { hotelsData } from "../../../../data/hotels.data";

@Component({
  selector: 'app-inbound-hotels',
  imports: [CommonModule, FormsModule, HotelsView],
  templateUrl: './inbound-hotels.html',
  styleUrl: './inbound-hotels.scss'
})
export class InboundHotels {
  @Input() hotelPackages: any
  @Input() transport: any
  @Input() childPolicy: any
  @Input() meals: any
  @Input() sightseeing: any[] = [];

  getObjectKeys(obj: any): string[] {
    return Object.keys(obj);
  }

  getCategoryClass(category: string): string {
    if (category.includes('3-Star Deluxe')) return 'bg-green-50 border-green-200';
    if (category.includes('4-Star Deluxe')) return 'bg-blue-50 border-blue-200';
    if (category.includes('5-Star Deluxe')) return 'bg-purple-50 border-purple-200';
    if (category.includes('5-Star Luxury')) return 'bg-gold-50 border-gold-200';
    return 'bg-gray-50 border-gray-200';
  }

  selectedHotel: any = null;

  slugify(text: string): string {
    return text
      .toString()
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w\-]+/g, '')
      .replace(/\-\-+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '');
  }

  openHotelModal(item: any) {
    let matchedHotel = null;
    if (item && item.name) {
      const customId = this.slugify(item.name);
      for (const dest of hotelsData) {
        if (dest.hotels && Array.isArray(dest.hotels)) {
          const match = dest.hotels.find((h: any) => h.id === customId);
          if (match) {
            matchedHotel = match;
            break;
          }
        }
      }
    }

    if (matchedHotel) {
      // Merge with the clicked hotel item so we keep the correct image and override/add extra details
      this.selectedHotel = {
        ...matchedHotel,
        image: item.image || matchedHotel.image || 'assets/images/default-hotel.jpg'
      };
    } else {
      this.selectedHotel = {
        ...item,
        id: item.id || (item.name ? this.slugify(item.name) : null)
      };
    }
  }

  closeHotelModal() {
    this.selectedHotel = null;
  }

}
