import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PRIVACY_PARAGRAPHS } from '../../../data/privacy.data';

@Component({
  selector: 'app-privacy',
  imports: [RouterLink],
  templateUrl: './privacy.html',
  styleUrl: '../terms/terms.scss',
})
export class Privacy {
  readonly paragraphs = PRIVACY_PARAGRAPHS;
}
