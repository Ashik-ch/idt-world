import { Component, OnInit, OnDestroy, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
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
export class TransportDetail implements OnInit, OnDestroy {
  category: TransportCategory | null = null;
  allCategories = TRANSPORT_CATEGORIES;

  private paramSub!: Subscription;

  constructor(private route: ActivatedRoute, private location: Location) {}

  ngOnInit() {
    this.paramSub = this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.category = id ? (TRANSPORT_CATEGORIES.find(c => c.id === id) ?? null) : null;
    });
  }

  ngOnDestroy() {
    this.paramSub.unsubscribe();
  }

  goBack() {
    this.location.back();
  }
}
