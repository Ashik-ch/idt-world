import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { features, hotelsResort, Services } from '../../../data/home.data';
import { CommonModule } from '@angular/common';
import * as AOS from 'aos';
import { FormsModule } from '@angular/forms';
import { register } from 'swiper/element/bundle';

@Component({
  selector: 'app-service',
  imports: [CommonModule, FormsModule],
  templateUrl: './service.html',
  styleUrl: './service.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Service {
  features = features;
  services = Services;
  selectedService: any = null;

  inboundCategories = Object.entries(hotelsResort.inboundPackages).map(([name, hotels]) => ({ name, hotels }));
  outboundCategories = Object.entries(hotelsResort.outboundPackages).map(([name, hotels]) => ({ name, hotels }));


  ngOnInit() {
    register();
  }

  openModal(service: any) {
    this.selectedService = service;
  }

  closeModal() {
    this.selectedService = null;
  }

  //recheck
  selectedHotel: any = null;
  openHotelModal(item: any) {
    this.selectedHotel = item;
  }
  closeHotelModal() {
    this.selectedHotel = null;
  }


}