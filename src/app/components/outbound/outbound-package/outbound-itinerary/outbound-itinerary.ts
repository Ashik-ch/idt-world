import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-outbound-itinerary',
  imports: [FormsModule, CommonModule
  ],
  templateUrl: './outbound-itinerary.html',
  styleUrl: './outbound-itinerary.scss'
})
export class OutboundItinerary {

  @Input() detailedItinerary: any


}
