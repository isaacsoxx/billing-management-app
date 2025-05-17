import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription, tap } from 'rxjs';
import {
  iGenericFormFieldModel,
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
    this.store.dispatch(
      setFormState({ isValid: isValid ?? false, value: value ?? null })
    );
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
}
