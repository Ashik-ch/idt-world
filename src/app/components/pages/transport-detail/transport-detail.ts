import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TRANSPORT_CATEGORIES, TransportCategory } from '../../../data/transportation.data';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-transport-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './transport-detail.html',
  styleUrl: './transport-detail.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TransportDetail implements OnInit {
  category: TransportCategory | null = null;
  allCategories = TRANSPORT_CATEGORIES;

  constructor(private route: ActivatedRoute, private location: Location) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.category = TRANSPORT_CATEGORIES.find(c => c.id === id) ?? null;
    }
  }

  goBack() {
    this.location.back();
  }
}
