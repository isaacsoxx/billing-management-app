import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { iGenericFormFieldModel, iGenericFormFieldType } from '../../../models';

@Component({
  selector: 'app-user-form',
  standalone: false,
  
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent implements OnInit {
  public userForm = new FormGroup({
    userId: new FormControl(''),
    name: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('', Validators.email),
    phoneNumber: new FormControl(null)
  });
  public formFields!: iGenericFormFieldModel[];

  ngOnInit(): void {
    this.formFields = [
      {
        displayName: 'Identificación',
        controlName: 'userId',
        type: iGenericFormFieldType.TEXT
      },
      {
        displayName: 'Nombre',
        controlName: 'name',
        type: iGenericFormFieldType.TEXT
      },
      {
        displayName: 'Apellido',
        controlName: 'lastName',
        type: iGenericFormFieldType.TEXT
      },
      {
        displayName: 'Correo Electrónico',
        controlName: 'email',
        type: iGenericFormFieldType.EMAIL
      },
      {
        displayName: 'Numero Telefónico',
        controlName: 'phoneNumber',
        type: iGenericFormFieldType.NUMBER
      }
    ];
  }
}
