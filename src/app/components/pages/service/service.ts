import { Component } from '@angular/core';
import { features, Services } from '../../../data/home.data';
import { CommonModule } from '@angular/common';
import * as AOS from 'aos';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-service',
  imports: [CommonModule, FormsModule],
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
