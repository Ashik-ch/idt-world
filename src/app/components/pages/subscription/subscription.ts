import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-subscription',
  imports: [CommonModule, FormsModule],
  templateUrl: './subscription.html',
  styleUrl: './subscription.scss'
})
export class Subscription {
  TEMPLATE_ID = "template_410knbm";
  SERVICE_ID = "service_9s4kon6";
  PUBLIC_KEY = "pkuaYiUyVh4a8z7Pq";

  @ViewChild('sectionRef', { static: true }) sectionRef!: ElementRef<any>;
  @Input() modal: boolean = false;
  email: string = '';
  phone: string = '';


  private intersectionObserver?: IntersectionObserver;

  ngOnInit(): void {
    this.loadRecaptchaScript();

    if (typeof window !== 'undefined') {
      // Guard for GSAP existence when CDN not yet loaded
      const hasGsap = (window as any).gsap && (window as any).gsap.to;
      // Use IntersectionObserver to trigger animation on enter
      this.intersectionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (hasGsap) {
              const gsap = (window as any).gsap;
              gsap.fromTo(
                entry.target,
                { autoAlpha: 0, y: 40 },
                { duration: 0.9, autoAlpha: 1, y: 0, ease: 'power3.out' }
              );
            } else {
              // Fallback: simple CSS reveal
              (entry.target as HTMLElement).style.opacity = '1';
              (entry.target as HTMLElement).style.transform = 'translateY(0)';
            }
            this.intersectionObserver?.unobserve(entry.target);
          }
        });
      }, { threshold: 0.25 });
    }
  }

  ngAfterViewInit(): void {
    if (this.sectionRef && this.intersectionObserver) {
      this.sectionRef.nativeElement.style.opacity = '0';
      this.sectionRef.nativeElement.style.transform = 'translateY(24px)';
      this.intersectionObserver.observe(this.sectionRef.nativeElement);
    }
  }

  ngOnDestroy(): void {
    this.intersectionObserver?.disconnect();
  }

  isSubmitting = false;

  onSubmit() {
    const email = this.email?.trim();
    const phone = this.phone?.trim();
    if (!email || !phone) {
      alert('Please enter both email and phone number.');
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    if (phone.length < 7) {
      alert('Please enter a valid phone number.');
      return;
    }
    this.isSubmitting = true;
    const templateParams = {
      form_type: "Subscription Form",
      from_name: "Website Subscriber",
      from_email: email,
      from_number: phone,
    };

    emailjs.send(
      this.SERVICE_ID,
      this.TEMPLATE_ID,
      templateParams,
      this.PUBLIC_KEY
    )
      .then(() => {
        alert('Subscription successful! Thank you.');
        this.email = '';
        this.phone = '';
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        alert('Failed to send message. Please try again.');
      })
      .finally(() => {
        this.isSubmitting = false;
      });
  }

  onCaptchaResolved(response: any) {
    console.log('reCAPTCHA solved:', response);
  }


  private loadRecaptchaScript(): void {
    // const script = document.createElement('script');
    // script.src = 'https://www.google.com/recaptcha/api.js';
    // script.async = true;
    // script.defer = true;
    // script.onload = () => {
    //   console.log('reCAPTCHA script loaded successfully');
    // };
    // script.onerror = (error) => {
    //   console.error('Error loading reCAPTCHA script:', error);
    // };
    // document.body.appendChild(script);
  }
} 
