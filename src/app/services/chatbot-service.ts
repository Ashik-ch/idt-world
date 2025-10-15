import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ChatbotService {
  private toggleChatSource = new Subject<void>();
  toggleChat$ = this.toggleChatSource.asObservable();

  triggerChat() {
    this.toggleChatSource.next();
  }
}
