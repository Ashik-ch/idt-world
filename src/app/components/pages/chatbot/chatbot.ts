import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { chatFlow } from '../../../data/chatbot.data';
import { ChatbotService } from '../../../services/chatbot-service';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chatbot.html',
  styleUrl: './chatbot.scss'
})
export class Chatbot {

  TEMPLATE_ID = "template_410knbm";
  SERVICE_ID = "service_9s4kon6";
  PUBLIC_KEY = "pkuaYiUyVh4a8z7Pq";

  @Input() isOpen = false;
  userName = '';
  userContact = '';
  userEmail = '';
  currentStep: any = null;

  step = 1; // 1 = name, 2 = contact, 3 = email, 4 = chat flow
  selectedAnswers: { question: string; answer: string }[] = [];

  constructor(private chatbotService: ChatbotService) { }

  ngOnInit() {
    this.chatbotService.toggleChat$.subscribe(() => this.openChat());
  }

  openChat() {
    this.isOpen = !this.isOpen;

    if (this.isOpen) {
      this.resetChat();
    }
  }

  resetChat() {
    this.userName = '';
    this.userContact = '';
    this.userEmail = '';
    this.step = 1;
    this.currentStep = null;
    this.selectedAnswers = [];
  }

  askContact() {
    if (this.userName.trim()) {
      this.step = 2;
    }
  }

  askEmail() {
    if (this.userName.trim()) {
      this.step = 3;
    }
  }

  startChatFlow() {
    if (this.userEmail.trim()) {
      this.step = 4;
      this.currentStep = chatFlow[0];
    }
  }

  // ✅ UPDATED METHOD
  selectOption(nextId: string, selectedText: string) {

    // Store current question + selected answer
    if (this.currentStep) {
      this.selectedAnswers.push({
        question: this.currentStep.question,
        answer: selectedText
      });
    }

    const nextStep = chatFlow.find((s) => s.id === nextId);

    if (nextStep) {
      this.currentStep = nextStep;

      if (nextStep.id === 'end') {
        this.sendToEmail();
      }
    }
  }

  // ✅ BUILD FULL CHAT SUMMARY + SEND
  sendToEmail() {

    const formattedConversation = this.selectedAnswers
      .map((item, index) =>
        `${index + 1}) ${item.answer}`
      )
      .join(' | ');

    const templateParams = {
      form_type: 'Chat Bot',
      from_name: this.userName,
      from_number: this.userContact,
      from_email: this.userEmail,
      message: `
New Travel Enquiry from Chatbot

Client Name: ${this.userName}
Contact Number: ${this.userContact}
Email: ${this.userEmail}

Selected Preferences:
${formattedConversation}
`
    };

    console.log('Clean Email Params:', templateParams);

    emailjs.send(
      this.SERVICE_ID,
      this.TEMPLATE_ID,
      templateParams,
      this.PUBLIC_KEY
    ).then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
      },
      (error) => {
        console.log('FAILED...', error);
      }
    );
  }
}