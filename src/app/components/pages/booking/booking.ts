import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import emailjs from '@emailjs/browser';

interface Country {
  name: string;
  flag: string;
  code: string;
  minLength: number;
}

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './booking.html',
  styleUrl: './booking.scss'
})
export class Booking implements OnInit {
  @Input() packageTitle: string = '';
  private readonly TEMPLATE_ID = 'template_x2wtl4h';
  private readonly SERVICE_ID = 'service_9s4kon6';
  private readonly PUBLIC_KEY = 'pkuaYiUyVh4a8z7Pq';

  bookingForm!: FormGroup;
  activeForm: 'tour' | 'change' = 'tour';
  isSubmitting = false;
  showSuccessModal = false;
  formSubmitted = false;
  showDropdown = false;
  countries: Country[] = [];
  selectedCountry: Country = { name: 'India', flag: 'https://flagcdn.com/w320/in.png', code: '+91', minLength: 10 };

  constructor(private fb: FormBuilder) {
    this.initForm();
  }

  ngOnInit() {
    this.loadCountries();
  }

  private initForm() {
    this.bookingForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      adults: [1, [Validators.required, Validators.min(1)]],
      children: [0],
      arrivalDate: [''],
      returnDate: [''],
      rooms: [1],
      extraBed: [0],
      packageType: [''],
      transportType: [''],
      message: [''],
      selectedAddOnsText: ['']
    });
  }

  async loadCountries() {
    try {
      const res = await fetch('https://restcountries.com/v3.1/all?fields=name,flags,idd');
      const data = await res.json();
      this.countries = data.map((c: any) => ({
        name: c.name.common,
        flag: c.flags.png,
        code: (c.idd?.root || '') + (c.idd?.suffixes ? c.idd.suffixes[0] : ''),
        minLength: 10 // Defaulting to 10, can be refined per country
      })).sort((a: Country, b: Country) => a.name.localeCompare(b.name));
    } catch (e) {
      console.error("Failed to load countries", e);
    }
  }

  selectCountry(country: Country) {
    this.selectedCountry = country;
    this.showDropdown = false;
  }

  onSubmit() {
    this.formSubmitted = true;
    const phoneValue = this.bookingForm.get('phone')?.value.replace(/\D/g, '');
    if (this.bookingForm.invalid || phoneValue.length < this.selectedCountry.minLength) {
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
    const templateParams = {
      form_type: (this.activeForm === 'tour' ? 'Tour Request' : 'Change Plan Request') + ` for Package '${this.packageTitle}'`,
      name: this.bookingForm.value.name,
      email: this.bookingForm.value.email,
      phone: `${this.selectedCountry.code} ${phoneValue}`,
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
        this.resetForm();
      })
      .catch((err) => console.error('EmailJS Error:', err))
      .finally(() => this.isSubmitting = false);
  }

  resetForm() {
    this.bookingForm.reset({ adults: 1, children: 0, rooms: 1, extraBed: 0 });
    this.formSubmitted = false;
    this.activeForm = 'tour';
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