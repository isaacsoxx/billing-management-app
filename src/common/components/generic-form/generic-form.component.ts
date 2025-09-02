import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription, tap } from 'rxjs';
import {
  iGenericFormFieldModel,
  iGenericFormFieldType,
  iGenericFormFieldValidation,
  setFormState,
} from '../..';

@Component({
  selector: 'app-generic-form',
  standalone: false,

  templateUrl: './generic-form.component.html',
  styleUrl: './generic-form.component.scss',
})
export class GenericFormComponent implements OnInit, OnDestroy {
  @Input()
  public form!: FormGroup;
  @Input()
  public formFields!: iGenericFormFieldModel[];
  public genericFormFieldTypes = iGenericFormFieldType;

  private formValueChangesSubscription$: Subscription = new Subscription();

  constructor(private store: Store) {}
  ngOnInit() {
    if (this.form) {
      this.formValueChangesSubscription$ = this.form.valueChanges
        .pipe(
          tap(() => {
            this.setFormState(this.form.valid, this.form.value);
          })
        )
        .subscribe();
    }
  }

  ngOnDestroy() {
    this.formValueChangesSubscription$.unsubscribe();
    this.store.dispatch(setFormState({ isValid: false, value: null }));
  }

  setFormState(isValid?: boolean, value?: any) {
    const trimmedValues = this.trimObjectValues(value);
    this.store.dispatch(
      setFormState({ isValid: isValid ?? false, value: trimmedValues })
    );
  }

  trimObjectValues(value: any) {
    return Object.entries(value as object).reduce((prev, [key, val]) => {
      prev[key] =
        typeof val === 'string' ? val.split(' ').join('') : val ?? null;
      return prev;
    }, {} as Record<string, string>);
  }

  getValidationStatus(controlName: string) {
    return (
      this.form.controls[controlName].invalid &&
      (this.form.controls[controlName].dirty ||
        this.form.controls[controlName].touched)
    );
  }

  getValidationMessage(field: iGenericFormFieldModel) {
    const foundMessage = field.validationMessages.find(
      (validationMessage: iGenericFormFieldValidation) => {
        if (
          this.form.controls[field.controlName].hasError(validationMessage.type)
        ) {
          return validationMessage.message;
        }
        return '';
      }
    );

    return foundMessage?.message || 'Hay un error con el valor indicado.';
  }

  capitalize(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}
