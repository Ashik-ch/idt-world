import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TestimonialFeedPost, testimonialList } from '../../../data/home.data';

@Component({
  selector: 'app-testimonial',
  imports: [CommonModule],
  templateUrl: './testimonial.html',
  styleUrl: './testimonial.scss'
})
export class Testimonial {
  testimonials = testimonialList;

  isVideo(post: TestimonialFeedPost): boolean {
    return post.mediaType === 'video';
  }

  telHref(contact: string): string {
    return `tel:${contact.replace(/\s/g, '')}`;
  }

  whatsappHref(whatsapp: string): string {
    return `https://wa.me/${whatsapp.replace(/\D/g, '')}`;
  }
}
