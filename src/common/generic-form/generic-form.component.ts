import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { iGenericFormFieldModel, iGenericFormFieldValidation } from '../../models';

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
  }

  getValidationStatus(controlName: string) {
    return this.form.controls[controlName].invalid && (this.form.controls[controlName].dirty || this.form.controls[controlName].touched)
  }

  getValidationMessage(field: iGenericFormFieldModel) {
    const foundMessage = field.validationMessages.find((validationMessage: iGenericFormFieldValidation) => {
      if (this.form.controls[field.controlName].hasError(validationMessage.type)) {
        return validationMessage.message;
      }
      return '';
    });

    return foundMessage?.message || 'Hay un error con el valor que indicó.';
  }
}
