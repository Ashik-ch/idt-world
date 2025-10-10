import { Component } from '@angular/core';
// import { InboundMap } from './inbound-map/inbound-map';
// import { inboundPackages } from '../../data/package.data';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Quotes } from '../pages/quotes/quotes';
import { QUOTES } from '../../data/quotes.data';
import { inboundPackages } from '../../data/package.data';

@Component({
  selector: 'app-inbound',
  imports: [
    // InboundMap, 
    CommonModule, FormsModule, Quotes, RouterModule],
  templateUrl: './inbound.html',
  styleUrl: './inbound.scss'
})
export class Inbound {
  inboundPackages = inboundPackages;
  quotes = QUOTES[0];
  constructor(private router: Router) { }

  navigateToState(state: string) {
    this.router.navigate(['/inbound', state]);
  }

  openPackage(packageId: string) {
    console.log('Selected package:', packageId);
  }
}

