import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/pages/header/header';
import { Footer } from './components/pages/footer/footer';
import { Chatbot } from "./components/pages/chatbot/chatbot";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    Header, Footer, Chatbot],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('idt-world');
}
