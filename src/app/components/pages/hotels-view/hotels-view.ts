import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hotels-view',
  imports: [CommonModule, FormsModule],
  templateUrl: './hotels-view.html',
  styleUrl: './hotels-view.scss'
})
export class HotelsView {

  @Input() hotel: any | null = null;
  @Output() close = new EventEmitter<void>();

  handleClose() {
    this.close.emit();
  }
}
