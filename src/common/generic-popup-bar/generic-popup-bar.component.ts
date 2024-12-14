import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-generic-popup-bar',
  standalone: false,
  
  templateUrl: './generic-popup-bar.component.html',
  styleUrl: './generic-popup-bar.component.scss'
})
export class GenericPopupBarComponent {
  public display!: boolean;
  
  onDisplay() {
    this.display = !this.display;
  }
}
