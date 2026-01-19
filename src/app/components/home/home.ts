import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Service } from '../pages/service/service';
import { Subscription } from '../pages/subscription/subscription';
import { HomeFeatures } from "./home-features/home-features";
import { NgxTypewriterComponent } from '@omnedia/ngx-typewriter';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule, RouterModule,
    Service, Subscription, HomeFeatures, NgxTypewriterComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  isSubscriptionOpen = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const hasVisited = localStorage.getItem('hasVisited');
      if (!hasVisited) {
        this.isSubscriptionOpen = true;
        localStorage.setItem('hasVisited', 'true');
      }
    }
  }
}
