import { Component, input } from '@angular/core';

@Component({
  selector: 'svg[no-results-icon]',
  host: {
    '[attr.viewBox]': 'viewBox()',
  },
  standalone: false,

  templateUrl: './no-results-icon.component.html',
  styleUrl: './no-results-icon.component.scss',
})
export class NoResultsIconComponent {
  readonly viewBox = input<string>('0 0 24 24');
}
