import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  iGenericFormFieldModel,
  iGenericFormFieldType,
  iGenericFormFieldValidationType,
} from '../../../common';
import { Store } from '@ngrx/store';
import { iSessionModel, selectAuthSession } from '../../../auth';
import { firstValueFrom, map } from 'rxjs';

@Component({
  selector: 'app-users-form',
  standalone: false,

  templateUrl: './users-form.component.html',
  styleUrl: './users-form.component.scss',
})
export class UsersFormComponent implements OnInit {
  public userForm = new FormGroup<Record<string, FormControl>>({
    emailAddress: new FormControl('', [Validators.required, Validators.email]),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
  });
  public formFields!: iGenericFormFieldModel[];

  constructor(private readonly store: Store) {}

  ngOnInit() {
    this.setFormFields();
    this.validateFormByRole();
  }

  setFormFields() {
    this.formFields = [
      {
        displayName: 'Correo electrónico',
        controlName: 'emailAddress',
        type: iGenericFormFieldType.EMAIL,
        validationMessages: [
          {
            message: 'El correo electrónico es requerido.',
            type: iGenericFormFieldValidationType.REQUIRED,
          },
          {
            message: 'El correo electrónico indicado es inválido.',
            type: iGenericFormFieldValidationType.EMAIL,
          },
        ],
      },
      {
        displayName: 'Nombre',
        controlName: 'firstName',
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
    ];
  }

  async validateFormByRole() {
    const activeUserRole = await firstValueFrom(
      this.store
        .select(selectAuthSession)
        .pipe(map((session: iSessionModel | null) => session?.role))
    );

    if (activeUserRole && activeUserRole === 'maintainer') {
      this.expandFormControls();
    }
  }

  expandFormControls() {
    this.userForm.addControl('role', new FormControl('', Validators.required));
    this.formFields.push({
      displayName: 'Rol',
      controlName: 'role',
      type: iGenericFormFieldType.SELECT,
      options: ['admin', 'maintainer'],
      validationMessages: [
        {
          message: 'El rol es requerido.',
          type: iGenericFormFieldValidationType.REQUIRED,
        },
      ],
    });
  }
}
