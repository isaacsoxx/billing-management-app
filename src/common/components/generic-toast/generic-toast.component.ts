import { Component } from '@angular/core';
import { NgToastService, ToasterPosition } from 'ng-angular-popup';

@Component({
  selector: 'app-generic-toast',
  standalone: false,

  templateUrl: './generic-toast.component.html',
  styleUrl: './generic-toast.component.scss',
})
export class GenericToastComponent {
  public position: ToasterPosition = ToasterPosition.TOP_CENTER;

  constructor() {}
}
