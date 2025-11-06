import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-outbound-hotels',
  imports: [CommonModule, FormsModule],
  templateUrl: './outbound-hotels.html',
  styleUrl: './outbound-hotels.scss'
})
export class OutboundHotels {
  @Input() hotels: any
  @Input() travelDetails: any
  @Input() childPolicy: any
  @Input() meals: any

  ngOnInit() {
  }

  getObjectKeys(obj: any): string[] {
    return Object.keys(obj);
  }

}
