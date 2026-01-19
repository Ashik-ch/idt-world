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
  activeFilter = 'all';

  get visiblePackages() {
    const term = this.searchTerm.trim().toLowerCase();
    return this.inboundPackages.filter(pkg => {

      // 1️⃣ FILTER by category
      const matchesFilter =
        this.activeFilter === 'all' ||
        pkg.category === this.activeFilter;

      // 2️⃣ FILTER by search term
      const matchesSearch = !term ||
        pkg.name.toLowerCase().includes(term) ||
        pkg.id.toLowerCase().includes(term);

      // 3️⃣ RETURN ONLY MUTUAL DATA
      return matchesFilter && matchesSearch;
    });
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

  // Package filters
  filterTabs = [
    { id: 'all', label: 'All Packages' },
    { id: 'kerala-domestic', label: 'KL: packages(Domestic Guests)' },
    { id: 'kerala-foreign', label: 'KL: Packages (Foreign Guests)' },
    { id: 'kerala-border', label: 'KL Packages with Border Destinations' },
    { id: 'kerala-divinity', label: 'KL Divinity Tour Packages' },
    { id: 'kerala-resort', label: 'KL Resort Packages' },
    { id: 'kerala-wellness', label: 'KL Wellness Tours' },
    { id: 'south-india', label: 'South India Tour Packages' },
  ];


  setFilter(filterId: string) {
    this.activeFilter = filterId;
  }
}

