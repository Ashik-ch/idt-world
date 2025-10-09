import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Service } from '../pages/service/service';
import { Subscription } from '../pages/subscription/subscription';
// import { NgxTypewriterComponent } from '@omnedia/ngx-typewriter';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule, RouterModule,
    Service, Subscription,],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  isSubscriptionOpen = false;

  ngOnInit() {
    const hasVisited = localStorage.getItem('hasVisited');
    if (!hasVisited) {
      this.isSubscriptionOpen = true;
      localStorage.setItem('hasVisited', 'true');
    }
  }
}
