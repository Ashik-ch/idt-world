import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { chatFlow } from '../../../data/chatbot.data';
import { ChatbotService } from '../../../services/chatbot-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chatbot',
  imports: [CommonModule, FormsModule],
  templateUrl: './chatbot.html',
  styleUrl: './chatbot.scss'
})

export class Chatbot {
  @Input() isOpen = false;
  userName = '';
  userContact = '';
  currentStep: any = null;   // IMPORTANT: start as null
  step = 1;                  // 1 = name, 2 = contact, 3 = chat

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
    this.step = 1;
    this.currentStep = null;
  }

  askContact() {
    if (this.userName.trim()) {
      this.step = 2;
    }
  }

  startChatFlow() {
    if (this.userContact.trim()) {
      this.step = 3;
      this.currentStep = chatFlow[0];
    }
  }

  selectOption(nextId: string) {
    const nextStep = chatFlow.find((s) => s.id === nextId);
    if (nextStep) {
      this.currentStep = nextStep;
    }
  }
}
