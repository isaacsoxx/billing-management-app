import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map, Observable, of } from 'rxjs';
import {
  iGenericFormFieldModel,
  iGenericFormFieldType,
  iGenericFormFieldValidationType,
} from '../../../common';

@Component({
  selector: 'app-user-form',
  standalone: false,

  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss',
})
export class UserFormComponent implements OnInit, OnDestroy {
  private isFormValid$: Observable<boolean> = of(false);
  public userForm = new FormGroup({
    userId: new FormControl(null, [
      Validators.required,
      Validators.minLength(9),
    ]),
    name: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl(null, [
      Validators.required,
      Validators.minLength(8),
    ]),
  });
  public formFields!: iGenericFormFieldModel[];

  ngOnInit(): void {
    this.isFormValid$ = this.userForm.statusChanges.pipe(
      map((changes) => changes === 'VALID')
    );
    this.setFormFields();
  }

  ngOnDestroy(): void {
    this.userForm.reset();
  }

  setFormFields() {
    this.formFields = [
      {
        displayName: 'Identificación',
        controlName: 'userId',
        type: iGenericFormFieldType.NUMBER,
        validationMessages: [
          {
            message: 'El número de identificación es requerido.',
            type: iGenericFormFieldValidationType.REQUIRED,
          },
          {
            message:
              'El número de identificación debe indicar un máximo de 8 dígitos.',
            type: iGenericFormFieldValidationType.MINLENGTH,
          },
        ],
      },
      {
        displayName: 'Nombre',
        controlName: 'name',
        type: iGenericFormFieldType.TEXT,
        validationMessages: [
          {
            message: 'El nombre es requerido.',
            type: iGenericFormFieldValidationType.REQUIRED,
          },
        ],
      },
      {
        displayName: 'Apellido',
        controlName: 'lastName',
        type: iGenericFormFieldType.TEXT,
        validationMessages: [
          {
            message: 'El apellido es requerido.',
            type: iGenericFormFieldValidationType.REQUIRED,
          },
        ],
      },
      {
        displayName: 'Correo Electrónico',
        controlName: 'email',
        type: iGenericFormFieldType.EMAIL,
        validationMessages: [
          {
            message: 'El correo electrónico es requerido.',
            type: iGenericFormFieldValidationType.REQUIRED,
          },
          {
            message:
              'El correo electrónico debe indicar el formato correcto; (correo@dominio.com).',
            type: iGenericFormFieldValidationType.EMAIL,
          },
        ],
      },
      {
        displayName: 'Número Telefónico',
        controlName: 'phoneNumber',
        type: iGenericFormFieldType.NUMBER,
        validationMessages: [
          {
            message: 'El número telefónico es requerido',
            type: iGenericFormFieldValidationType.REQUIRED,
          },
          {
            message:
              'El número telefónico debe indicar un mínimo de 8 digitos.',
            type: iGenericFormFieldValidationType.MINLENGTH,
          },
        ],
      },
    ];
  }

  // this could be generic
  getFormValue() {
    return this.userForm.value;
  }

  getIsFormValid$() {
    return this.isFormValid$;
  }
}
