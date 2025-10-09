import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-quotes',
  imports: [],
  templateUrl: './quotes.html',
  styleUrl: './quotes.scss'
})
export class Quotes {
  @Input() quote: any

}
