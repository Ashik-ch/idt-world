import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TERMS_INTRO, TERMS_SECTIONS } from '../../../data/terms.data';

@Component({
  selector: 'app-terms',
  imports: [RouterLink],
  templateUrl: './terms.html',
  styleUrl: './terms.scss',
})
export class Terms {
  readonly introduction = TERMS_INTRO;
  readonly sections = TERMS_SECTIONS;
}
