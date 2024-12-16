import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { iGenericFormFieldModel } from '../../models';

@Component({
  selector: 'app-generic-form',
  standalone: false,
  
  templateUrl: './generic-form.component.html',
  styleUrl: './generic-form.component.scss'
})
export class GenericFormComponent implements OnInit {
  @Input() form!: FormGroup;
  @Input() formFields!: iGenericFormFieldModel[];

  ngOnInit(): void {
    console.log(this.form, this.form.controls[this.formFields[0].controlName]);
  }
}
