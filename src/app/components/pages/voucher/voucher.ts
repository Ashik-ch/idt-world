import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { COMMON_VOUCHER_DESCRIPTION, TOUR_VOUCHERS, TourVoucher } from '../../../data/voucher.data';

@Component({
  selector: 'app-voucher',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './voucher.html',
  styleUrl: './voucher.scss',
})
export class Voucher implements OnInit, OnDestroy {
  readonly whatsappPhone = '919847240456';
  readonly vouchers = TOUR_VOUCHERS;
  readonly commonDescription = COMMON_VOUCHER_DESCRIPTION;
  readonly autoPlayMs = 5000;

  activeIndex = 0;
  isCarouselPaused = false;

  private autoPlayTimer: ReturnType<typeof setInterval> | null = null;

  ngOnInit() {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!prefersReduced) {
      this.startAutoPlay();
    }
  }

  ngOnDestroy() {
    this.stopAutoPlay();
  }

  get carouselTransform(): string {
    return `translateX(-${this.activeIndex * 100}%)`;
  }

  pauseCarousel() {
    this.isCarouselPaused = true;
  }

  resumeCarousel() {
    this.isCarouselPaused = false;
  }

  goToSlide(index: number) {
    this.activeIndex = index;
  }

  nextSlide() {
    this.activeIndex = (this.activeIndex + 1) % this.vouchers.length;
  }

  prevSlide() {
    this.activeIndex =
      (this.activeIndex - 1 + this.vouchers.length) % this.vouchers.length;
  }

  enquireVoucher(voucher: TourVoucher) {
    const message = `✨ *Luxury Tour Voucher*
IDT World | India Destination Tours

*Package:* ${voucher.title}
*Occasion:* ${voucher.occasion}

${this.commonDescription}

I would like to know more about this voucher. Please share details and booking assistance.`;

    const url = `https://wa.me/${this.whatsappPhone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }

  private startAutoPlay() {
    this.stopAutoPlay();
    this.autoPlayTimer = setInterval(() => {
      if (!this.isCarouselPaused) {
        this.nextSlide();
      }
    }, this.autoPlayMs);
  }

  private stopAutoPlay() {
    if (this.autoPlayTimer) {
      clearInterval(this.autoPlayTimer);
      this.autoPlayTimer = null;
    }
  }
}
