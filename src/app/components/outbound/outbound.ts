import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { QUOTES } from '../../data/quotes.data';
import { Router } from '@angular/router';
import { outBoundPackages } from '../../data/outbound.data';
import { Quotes } from "../pages/quotes/quotes";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OutboundMap } from "./outbound-map/outbound-map";

@Component({
  selector: 'app-outbound',
  imports: [Quotes,
    CommonModule, FormsModule, OutboundMap],
  templateUrl: './outbound.html',
  styleUrl: './outbound.scss'
})
export class Outbound {
  @ViewChildren('countryCard') countryCards!: QueryList<ElementRef>;
  quotes = QUOTES[1];
  countries = outBoundPackages;
  constructor(private router: Router) { }

  navigateToCountry(country: string) {
    this.router.navigate(['/outbound', country]);
  }

}
