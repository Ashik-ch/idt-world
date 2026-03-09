import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inbound-summary',
  imports: [CommonModule, FormsModule],
  templateUrl: './inbound-summary.html',
  styleUrl: './inbound-summary.scss'
})
export class InboundSummary {
  @Input() details: any
  @Input() specialOffers: any
  @Input() exclusions: any
  @Input() inclusions: any
  @Output() attractionsChanged = new EventEmitter<any[]>();
  selectedSupplementalAttractions: { [key: string]: boolean } = {};

  onSelectionChange() {
    const selectedList = this.details.filter(
      (attraction: any) => this.selectedSupplementalAttractions[attraction.name]
    );
    this.attractionsChanged.emit(selectedList);
  }

  // Logic to allow clicking the whole card to check the box
  toggleSelection(attraction: any) {
    this.selectedSupplementalAttractions[attraction.name] = !this.selectedSupplementalAttractions[attraction.name];
    this.onSelectionChange();
  }

}
