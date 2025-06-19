import { Component, input } from '@angular/core';

@Component({
  selector: 'svg[unauthorized-icon]',
  host: {
    '[attr.viewBox]': 'viewBox()',
  },
  standalone: false,

  templateUrl: './unauthorized-icon.component.html',
  styleUrl: './unauthorized-icon.component.scss',
})
export class UnauthorizedIconComponent {
  readonly viewBox = input<string>('0 0 24 24');
}
