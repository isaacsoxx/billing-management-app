import { Component, input } from '@angular/core';

@Component({
  selector: 'svg[load-error-icon]',
  host: {
    '[attr.viewBox]': 'viewBox()',
  },
  standalone: false,

  templateUrl: './load-error-icon.component.html',
  styleUrl: './load-error-icon.component.scss',
})
export class LoadErrorIconComponent {
  readonly viewBox = input<string>('0 0 24 24');
}
