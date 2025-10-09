import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/pages/footer/header/header';
import { Footer } from './components/pages/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    Header, Footer,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('idt-world');
}
