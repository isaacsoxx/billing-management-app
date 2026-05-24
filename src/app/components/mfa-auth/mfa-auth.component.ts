import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {
  iGenericFormFieldModel,
  iGenericFormFieldType,
  iGenericFormFieldValidationType,
  selectFormValid,
  setError,
  setIsLoading,
} from '../../../common';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { confirmSignIn } from 'aws-amplify/auth';
import {
  getAuthSession,
  selectMfaVerificationStep,
  setMfaVerificationStep,
  setSignInStep,
} from '../../../auth';

@Component({
  selector: 'app-mfa-auth',
  standalone: false,

  templateUrl: './mfa-auth.component.html',
  styleUrl: './mfa-auth.component.scss',
})
export class MfaAuthComponent implements OnInit {
  public isFormValid$: Observable<boolean> = this.store.select(selectFormValid);
  public verificationCodeForm!: FormGroup<Record<string, FormControl>>;
  public verificationCodeFormActive$: Observable<boolean> = this.store.select(
    selectMfaVerificationStep,
  );
  public verificationCodeFormFields!: iGenericFormFieldModel[];

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.setVerificationCodeFormForm();
  }

  setVerificationCodeFormForm() {
    this.verificationCodeForm = new FormGroup<Record<string, FormControl>>({
      mfaCode: new FormControl('', [Validators.required]),
    });

    this.verificationCodeFormFields = [
      {
        displayName: 'Código de verificación',
        controlName: 'mfaCode',
        type: iGenericFormFieldType.NUMBER,
        validationMessages: [
          {
            message: 'El código de verificación es obligatorio.',
            type: iGenericFormFieldValidationType.REQUIRED,
          },
        ],
      },
    ];
  }

  async onVerificationCodeFormInitiated() {
    this.store.dispatch(setIsLoading({ isLoading: true }));
    console.log('Enter MFA code');
    try {
      const verificationCodeFormCode =
        this.verificationCodeForm.get('mfaCode')!.value;
      console.log(verificationCodeFormCode);
      const challengeResponse = await confirmSignIn({
        challengeResponse: verificationCodeFormCode,
      });

      if (challengeResponse.isSignedIn === true) {
        this.store.dispatch(getAuthSession());
      } else {
        throw new Error();
      }
      console.log('Challenge response =>', challengeResponse);
    } catch (error) {
      this.store.dispatch(setIsLoading({ isLoading: false }));
      this.store.dispatch(
        setError({
          error: 'Error de autenticación. El codigo que ingresó es incorrecto.',
        }),
      );
      this.resetAuthFlow();
      console.log('Sign in error =>', error);
    }
  }

  resetAuthFlow() {
    // this.signInForm.reset();
    // this.verificationCodeForm.reset();
    this.store.dispatch(setSignInStep({ signInStep: true }));
    this.store.dispatch(setMfaVerificationStep({ mfaVerificationStep: false }));
  }
}
