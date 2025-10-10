import { Component } from '@angular/core';
import { features, Services, testimonialList } from '../../../data/home.data';
import { CommonModule } from '@angular/common';
import * as AOS from 'aos';

@Component({
  selector: 'app-service',
  imports: [CommonModule],
  templateUrl: './service.html',
  styleUrl: './service.scss'
})
export class Service {
  features = features;
  services = Services;
  selectedService: any = null;

  openModal(service: any) {
    this.selectedService = service;
  }

  closeModal() {
    this.selectedService = null;
  }
}
