import { Component } from '@angular/core';
import { features, Services, testimonialList } from '../../../data/home.data';

@Component({
  selector: 'app-service',
  imports: [],
  templateUrl: './service.html',
  styleUrl: './service.scss'
})
export class Service {
  features = features;
  services = Services;
  testimonials = testimonialList;
  selectedService: any = null;

  openModal(service: any) {
    this.selectedService = service;
  }

  closeModal() {
    this.selectedService = null;
  }
}
