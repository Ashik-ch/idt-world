import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import emailjs from '@emailjs/browser';


@Component({
  selector: 'app-booking',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './booking.html',
  styleUrl: './booking.scss'
})
export class Booking {
  TEMPLATE_ID = 'template_x2wtl4h';
  SERVICE_ID = 'service_9s4kon6';
  PUBLIC_KEY = 'pkuaYiUyVh4a8z7Pq';

  bookingForm!: FormGroup;
  activeForm: 'tour' | 'change' = 'tour';
  isSubmitting = false;
  showSuccessModal = false;
  formSubmitted = false;

  constructor(private fb: FormBuilder) {
    this.initForm();
  }

  private initForm() {
    this.bookingForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      adults: [1, Validators.required],
      children: [0, Validators.required],
      arrivalDate: ['',],
      returnDate: ['',],
      rooms: [1,],
      extraBed: [0,],
      packageType: ['',],
      transportType: [''],
      message: ['']
    });
  }

  onSubmit() {
    this.formSubmitted = true;
    if (this.bookingForm.invalid) {
      this.bookingForm.markAllAsTouched();

      Object.keys(this.bookingForm.controls).forEach(key => {
        const controlErrors = this.bookingForm.get(key)?.errors;
        if (controlErrors) {
          console.log('Control:', key);
        }
      });

      return;
    }

    this.isSubmitting = true;

    const formType =
      this.activeForm === 'tour'
        ? 'Tour Request'
        : 'Change Plan Request';

    const templateParams = {
      form_type: formType,
      name: this.bookingForm.value.name,
      email: this.bookingForm.value.email,
      phone: this.bookingForm.value.phone,
      adults: this.bookingForm.value.adults,
      children: this.bookingForm.value.children,
      arrival_date: this.bookingForm.value.arrivalDate,
      return_date: this.bookingForm.value.returnDate,
      rooms: this.bookingForm.value.rooms,
      extra_bed: this.bookingForm.value.extraBed,
      package_type: this.bookingForm.value.packageType,
      transport_type: this.bookingForm.value.transportType,
      message: this.bookingForm.value.message,
      submitted_at: new Date().toLocaleString()
    };

    emailjs.send(
      this.SERVICE_ID,
      this.TEMPLATE_ID,
      templateParams,
      this.PUBLIC_KEY
    )
      .then(() => {
        this.showSuccessModal = true;
        this.bookingForm.reset();
        this.activeForm = 'tour';
        this.isSubmitting = false;
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        this.isSubmitting = false;
      });
  }

  // WhatsApp message
  sendWhatsAppMessage() {
    const message = `
🧳 *Tour Confirmation Request*  
-----------------------------------  
👤 *Name:* ${this.bookingForm.value.name}  
📞 *Contact:* ${this.bookingForm.value.phone}  
👨‍👩‍👧‍👦 *Adults:* ${this.bookingForm.value.adults}  
🧒 *Children:* ${this.bookingForm.value.children || 0}  
📅 *Arrival:* ${this.bookingForm.value.arrivalDate || 'Not specified'}  
📅 *Return:* ${this.bookingForm.value.returnDate || 'Not specified'}  
🏨 *Rooms:* ${this.bookingForm.value.rooms}  
🛏️ *Extra Beds:* ${this.bookingForm.value.extraBed}  
💎 *Package:* ${this.bookingForm.value.packageType || 'Not selected'}  
🚗 *Transport:* ${this.bookingForm.value.transportType || 'Not selected'}  
-----------------------------------  
Please confirm the booking without modifications.`;

    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = '919847240456';
    window.open(`https://wa.me/${phoneNumber}?text = ${encodedMessage} `, '_blank');
  }

}