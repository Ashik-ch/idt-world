import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-welcome-modal',
  imports: [FormsModule, CommonModule],
  templateUrl: './welcome-modal.html',
  styleUrl: './welcome-modal.scss',
})
export class WelcomeModal implements OnInit {

  isVisible = false;
  randomMessage = '';

  ngOnInit(): void {
    const hasSeen = localStorage.getItem('welcomeShown');

    if (!hasSeen) {
      setTimeout(() => {
        this.isVisible = true;
      }, 1500);
    }
    this.setRandomMessage();
  }


  setRandomMessage() {
    const randomIndex = Math.floor(Math.random() * this.welcomeText.length);
    this.randomMessage = this.welcomeText[randomIndex];
  }

  welcomeText = [
    `“Travel is the only thing you buy that makes you richer.” 
  We’re glad to have you here! Explore our exclusive tour packages and discover unforgettable experiences crafted just for you.`,

    `“The world is waiting for you.” 
  Welcome to our travel agency! Discover handpicked journeys and create memories that last a lifetime.`,

    `“Adventure begins where comfort ends.” 
  Step into a world of breathtaking destinations, curated tours, and experiences designed just for you.`,

    `“Collect moments, not things.” 
  We’re excited to guide you through extraordinary destinations and unforgettable adventures.`,

    `“Life is short and the world is wide.” 
  Explore our exclusive packages and let your next journey become your favorite story.`,

    `“Wherever you go becomes a part of you somehow.” 
  Discover immersive travel experiences crafted with care, passion, and expertise.`,

    `“Dream. Explore. Discover.” 
  Your journey starts here — dive into our curated tours and unlock unforgettable experiences around the globe.`
  ];

  close() {
    console.log('button clicked');

    this.isVisible = false;
    localStorage.setItem('welcomeShown', 'true');
  }
}
