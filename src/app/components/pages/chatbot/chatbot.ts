import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { chatFlow } from '../../../data/chatbot.data';
import { ChatbotService } from '../../../services/chatbot-service';
import emailjs from '@emailjs/browser';

// Interfaces for better type safety
interface Country {
  name: string;
  flag: string;
  code: string;
  minLength: number;
}

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chatbot.html',
  styleUrl: './chatbot.scss'
})
export class Chatbot implements OnInit {
  private readonly TEMPLATE_ID = "template_410knbm";
  private readonly SERVICE_ID = "service_9s4kon6";
  private readonly PUBLIC_KEY = "pkuaYiUyVh4a8z7Pq";

  @Input() isOpen = false;
  userName = '';
  userContact = '';
  contactError = false;
  step = 1; // 1: Name, 2: Contact, 4: Chat Flow
  countries: Country[] = [];
  selectedCountry: Country = {
    name: 'India',
    flag: 'https://flagcdn.com/w320/in.png',
    code: '+91',
    minLength: 10
  };
  showDropdown = false;

  currentStep: any = null;
  selectedAnswers: { question: string; answer: string }[] = [];

  constructor(private readonly chatbotService: ChatbotService) { }

  ngOnInit(): void {
    this.chatbotService.toggleChat$.subscribe(() => this.openChat());
    this.loadCountries();
  }

  /**
   * Fetches country data and assigns estimated phone lengths
   */
  async loadCountries() {
    try {
      const response = await fetch('https://restcountries.com/v3.1/all?fields=name,flags,idd');
      const data = await response.json();

      this.countries = data.map((c: any) => {
        const root = c.idd?.root || '';
        const suffix = c.idd?.suffixes ? c.idd.suffixes[0] : '';
        const dialCode = root + suffix;

        return {
          name: c.name.common,
          flag: c.flags.png,
          code: dialCode,
          minLength: this.getExpectedLength(dialCode)
        };
      }).sort((a: Country, b: Country) => a.name.localeCompare(b.name));
    } catch (error) {
      console.error("Failed to load countries", error);
    }
  }

  private getExpectedLength(code: string): number {
    const lengths: { [key: string]: number } = { '+1': 10, '+91': 10, '+44': 10, '+971': 9 };
    return lengths[code] || 8; // Default to 8 if not specified
  }

  selectCountry(country: Country) {
    this.selectedCountry = country;
    this.showDropdown = false;
    this.contactError = false;
  }

  openChat() {
    this.isOpen = !this.isOpen;
    if (this.isOpen) this.resetChat();
  }

  resetChat() {
    this.step = 1;
    this.userName = '';
    this.userContact = '';
    this.contactError = false;
    this.selectedAnswers = [];
    this.currentStep = null;
    this.showDropdown = false;
  }

  askContact() {
    if (this.userName.trim().length) {
      this.step = 2;
    }
  }

  /**
   * Validates contact based on country and moves to chat flow
   */
  startChatFlow() {
    const cleanPhone = this.userContact.replace(/\D/g, '');

    // Validation logic: checks against the country's minimum length
    if (cleanPhone.length < this.selectedCountry.minLength) {
      this.contactError = true;
      return;
    }

    this.contactError = false;
    this.step = 4;
    this.currentStep = chatFlow[0];
  }

  selectOption(option: any) {
    if (this.currentStep) {
      this.selectedAnswers.push({
        question: this.currentStep.question,
        answer: option.text
      });
    }

    // ✅ If URL exists → open it
    if (option.url) {
      window.open(option.url, '_blank');
      return;
    }

    // ✅ Otherwise continue chatbot flow
    const nextStep = chatFlow.find((s) => s.id === option.next);
    if (nextStep) {
      this.currentStep = nextStep;
      if (nextStep.id === 'end') this.sendToEmail();
    }
  }

  sendToEmail() {
    const conversationSummary = this.selectedAnswers
      .map((item, i) => `${i + 1}. ${item.question}: ${item.answer}`)
      .join(' | ');

    const templateParams = {
      form_type: 'Chat Bot',
      from_name: this.userName,
      from_number: `${this.selectedCountry.code} ${this.userContact}`,
      message: `New Travel Enquiry\n\nName: ${this.userName}\nContact: ${this.selectedCountry.code}${this.userContact}\n\nDetails:\n${conversationSummary}`
    };

    emailjs.send(this.SERVICE_ID, this.TEMPLATE_ID, templateParams, this.PUBLIC_KEY)
      .then(
        (res) => console.log('Email Sent!', res.status),
        (err) => console.error('Email Failed...', err)
      );
  }
}