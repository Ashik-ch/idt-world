import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { testimonialList } from '../../../data/home.data';

@Component({
  selector: 'app-testimonial',
  imports: [CommonModule],
  templateUrl: './testimonial.html',
  styleUrl: './testimonial.scss'
})
export class Testimonial {
  testimonials = testimonialList;

}
