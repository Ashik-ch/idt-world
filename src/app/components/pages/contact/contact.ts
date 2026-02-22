import { Component } from '@angular/core';
import { QUOTES } from '../../../data/quotes.data';
import { Quotes } from '../quotes/quotes';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  imports: [Quotes, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  quotes = QUOTES[2];
  showSuccessPopup = false;
  contactForm: FormGroup;
  isSubmitting = false;
  TEMPLATE_ID = "template_410knbm";
  SERVICE_ID = "service_9s4kon6";
  PUBLIC_KEY = "pkuaYiUyVh4a8z7Pq";

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  onSubmit() {
    if (this.contactForm.invalid) return;
    this.isSubmitting = true;

    const templateParams = {
      from_name: this.contactForm.value.name,
      from_email: this.contactForm.value.email,
      message: this.contactForm.value.message,
    };

    emailjs.send(
      this.SERVICE_ID,
      this.TEMPLATE_ID,
      templateParams,
      this.PUBLIC_KEY
    )
      .then(() => {
        this.showSuccessPopup = true;
        this.contactForm.reset();
        this.isSubmitting = false;

        setTimeout(() => {
          this.showSuccessPopup = false;
        }, 3000);
      })
      .catch((error) => {
        alert('Failed to send message. Try again.');
        this.isSubmitting = false;
      });
  }
}