import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TOUR_VOUCHERS, TourVoucher } from '../../../data/voucher.data';

@Component({
  selector: 'app-voucher',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './voucher.html',
  styleUrl: './voucher.scss',
})
export class Voucher implements OnInit, OnDestroy {
  readonly whatsappPhone = '919847240456';
  readonly vouchers = TOUR_VOUCHERS;
  readonly autoPlayMs = 500;

  activeIndex = 0;
  isCarouselPaused = false;

  giftModalOpen = false;
  selectedVoucher: TourVoucher | null = null;

  giftForm = {
    senderName: '',
    recipientName: '',
    recipientPhone: '',
    personalMessage: '',
    preferredDate: '',
  };

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
    if (!this.giftModalOpen) {
      this.isCarouselPaused = false;
    }
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

  purchaseVoucher(voucher: TourVoucher) {
    this.openWhatsApp(this.buildPurchaseMessage(voucher));
  }

  openGiftModal(voucher: TourVoucher) {
    this.selectedVoucher = voucher;
    this.resetGiftForm();
    this.giftModalOpen = true;
    this.isCarouselPaused = true;
    document.body.style.overflow = 'hidden';
  }

  closeGiftModal() {
    this.giftModalOpen = false;
    this.selectedVoucher = null;
    this.isCarouselPaused = false;
    document.body.style.overflow = 'auto';
  }

  submitGift() {
    if (!this.selectedVoucher || !this.isGiftFormValid()) {
      return;
    }
    this.openWhatsApp(this.buildGiftMessage(this.selectedVoucher));
    this.closeGiftModal();
  }

  isGiftFormValid(): boolean {
    const { senderName, recipientName } = this.giftForm;
    return senderName.trim().length >= 2 && recipientName.trim().length >= 2;
  }

  private startAutoPlay() {
    this.stopAutoPlay();
    this.autoPlayTimer = setInterval(() => {
      if (!this.isCarouselPaused && !this.giftModalOpen) {
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

  private resetGiftForm() {
    this.giftForm = {
      senderName: '',
      recipientName: '',
      recipientPhone: '',
      personalMessage: '',
      preferredDate: '',
    };
  }

  private buildPurchaseMessage(voucher: TourVoucher): string {
    return `✨ *Luxury Tour Voucher — Purchase*
IDT World | India Destination Tours

*Occasion:* ${voucher.occasion}
*Package:* ${voucher.title}
*Duration:* ${voucher.duration}
*Investment:* ${voucher.value} (${voucher.guests})

${voucher.description}

*Signature inclusions:*
${voucher.highlights.map((h) => `• ${h}`).join('\n')}

*Validity:* ${voucher.validFor}

I would like to purchase this luxury voucher. Please share payment options and booking assistance.`;
  }

  private buildGiftMessage(voucher: TourVoucher): string {
    const { senderName, recipientName, recipientPhone, personalMessage, preferredDate } =
      this.giftForm;

    return `🎁 *Luxury Tour Voucher — Gift*
IDT World | India Destination Tours

*Occasion:* ${voucher.occasion}
*Package:* ${voucher.title}
*Duration:* ${voucher.duration}
*Investment:* ${voucher.value} (${voucher.guests})

*From:* ${senderName.trim()}
*Gift for:* ${recipientName.trim()}${recipientPhone.trim() ? `\n*Recipient phone:* ${recipientPhone.trim()}` : ''}${preferredDate.trim() ? `\n*Preferred travel date:* ${preferredDate.trim()}` : ''}${personalMessage.trim() ? `\n\n*Personal message:*\n"${personalMessage.trim()}"` : ''}

*Signature inclusions:*
${voucher.highlights.map((h) => `• ${h}`).join('\n')}

I would like to gift this luxury voucher. Please guide me on payment and redemption for the recipient.`;
  }

  private openWhatsApp(message: string) {
    const url = `https://wa.me/${this.whatsappPhone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }
}
