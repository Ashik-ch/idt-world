import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inbound-hotels',
  imports: [CommonModule, FormsModule],
  templateUrl: './inbound-hotels.html',
  styleUrl: './inbound-hotels.scss'
})
export class InboundHotels {
  @Input() hotelPackages: any
  @Input() transport: any
  @Input() childPolicy: any
  @Input() meals: any
  @Input() sightseeing: any[] = [];

  constructor(private readonly router: Router) {}

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

  slugify(text: string): string {
    return text
      .toString()
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]+/g, '')
      .replace(/--+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '');
  }

  openHotelModal(item: any) {
    const slug = item?.name ? this.slugify(item.name) : null;
    if (!slug) return;
    this.router.navigate(['/hotel', slug]);
  }
}
