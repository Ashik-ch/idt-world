import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { chatFlow } from '../../../data/chatbot.data';
import { ChatbotService } from '../../../services/chatbot-service';
import { COUNTRIES, Country } from '../../../data/countries.data';
import emailjs from '@emailjs/browser';

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
  countries: Country[] = COUNTRIES;
  selectedCountry: Country = COUNTRIES.find(c => c.code === '+91')!;
  showDropdown = false;

  currentStep: any = null;
  selectedAnswers: { question: string; answer: string }[] = [];

  constructor(private readonly chatbotService: ChatbotService) { }

  ngOnInit(): void {
    this.chatbotService.toggleChat$.subscribe(() => this.openChat());
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