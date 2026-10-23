import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-voucher',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './voucher.html',
  styleUrl: './voucher.scss',
})
export class Voucher {

  private sanitizer = inject(DomSanitizer);

  mobileImgs = ['2', '3', '4', '5'];

  galleryImgs = ['1', '2', '3', '4'];

  customFields = [
    { icon: 'pi pi-user', label: 'Your Name & Photo' },
    { icon: 'pi pi-gift', label: 'Recipient Name & Photo' },
    { icon: 'pi pi-building', label: 'Hotel Details' },
    { icon: 'pi pi-envelope', label: 'Your Special Message' },
  ];

  occasions = [
    { icon: 'pi pi-heart-fill', label: 'Wedding Gift' },
    { icon: 'pi pi-gift',       label: 'Birthday' },
    { icon: 'pi pi-star-fill',  label: 'Anniversary' },
    { icon: 'pi pi-users',      label: 'Family Tour' },
  ];

  // ── Replace VIDEO_ID_1 / 2 / 3 with actual YouTube video IDs ──
  videos: { id: string; title: string; caption: string; embedUrl: SafeResourceUrl }[] = [
    {
      id: 'VIDEO_ID_1',
      title: 'IDT Gift Voucher Experience',
      caption: 'Honeymoon & Anniversary stays',
      embedUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/VIDEO_ID_1'),
    },
    {
      id: 'VIDEO_ID_2',
      title: 'Kerala Tour Highlights',
      caption: 'Explore God\'s Own Country',
      embedUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/VIDEO_ID_2'),
    },
    {
      id: 'VIDEO_ID_3',
      title: 'Gift the Journey',
      caption: 'Family & group tour packages',
      embedUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/VIDEO_ID_3'),
    },
  ];
}
