import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { chatFlow } from '../../../data/chatbot.data';
import { ChatbotService } from '../../../services/chatbot-service';

@Component({
  selector: 'app-chatbot',
  imports: [CommonModule],
  templateUrl: './chatbot.html',
  styleUrl: './chatbot.scss'
})
export class Chatbot {
  isOpen = false;
  currentStep = chatFlow[0];

  constructor(private chatbotService: ChatbotService) { }

  ngOnInit() {
    this.chatbotService.toggleChat$.subscribe(() => this.openChat());
  }

  openChat() {
    this.isOpen = !this.isOpen;
    this.currentStep = chatFlow[0];
  }

  selectOption(nextId: string) {
    const nextStep = chatFlow.find((s) => s.id === nextId);
    if (nextStep) {
      this.currentStep = nextStep;
    }
  }
}
