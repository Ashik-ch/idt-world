import { Component } from '@angular/core';
import { QUOTES } from '../../../data/quotes.data';
import { Quotes } from '../quotes/quotes';

@Component({
  selector: 'app-contact',
  imports: [Quotes],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  quotes = QUOTES[2];

}
