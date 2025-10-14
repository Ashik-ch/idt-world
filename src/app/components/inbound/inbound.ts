import { Component } from '@angular/core';
import { InboundMap } from './inbound-map/inbound-map';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Quotes } from '../pages/quotes/quotes';
import { QUOTES } from '../../data/quotes.data';
import { inboundPackages } from '../../data/package.data';

@Component({
  selector: 'app-inbound',
  imports: [
    InboundMap, Quotes,
    CommonModule, FormsModule, RouterModule,
  ],
  templateUrl: './inbound.html',
  styleUrl: './inbound.scss'
})
export class Inbound {
  inboundPackages = inboundPackages;
  quotes = QUOTES[0];
  constructor(private router: Router) { }

  searchTerm = '';

  // 🔍 Computed filtered list
  get filteredPackages() {
    const term = this.searchTerm.trim().toLowerCase();
    if (!term) return this.inboundPackages;
    return this.inboundPackages.filter(
      (pkg) =>
        pkg.name.toLowerCase().includes(term) ||
        pkg.id.toLowerCase().includes(term)
    );
  }


  navigateToState(state: string) {
    console.log("state", state);
    this.router.navigate(['/inbound', state]);
  }

  openPackage(packageId: string) {
    console.log('Selected package:', packageId);
  }

  downloadPDF(fileId: string) {
    // Google Drive direct download URL format
    const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = 'IDT-Package.pdf'; // optional custom name
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.click();
  }
}

