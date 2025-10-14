import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { features, Services } from '../../../data/home.data';
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

  ngOnInit() {
    register();
  }

  openModal(service: any) {
    this.selectedService = service;
  }

  closeModal() {
    this.selectedService = null;
  }
}
