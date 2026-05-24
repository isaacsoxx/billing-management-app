import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  iGenericFormFieldModel,
  iGenericFormFieldType,
  iGenericFormFieldValidationType,
  selectFormValid,
  setError,
  setIsLoading,
} from '../../../common';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { signIn } from 'aws-amplify/auth';
import {
  getAuthSession,
  selectSignInStep,
  selectTrustedDeviceKey,
  setMfaVerificationStep,
  setSignInStep,
  setTrustedDeviceKey,
} from '../../../auth';

@Component({
  selector: 'app-sign-in',
  standalone: false,

  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
})
export class SignInComponent implements OnInit {
  public isFormValid$: Observable<boolean> = this.store.select(selectFormValid);

  public signInForm!: FormGroup<Record<string, FormControl>>;
  public signInChallengeActive$: Observable<boolean> =
    this.store.select(selectSignInStep);
  public signInFormFields!: iGenericFormFieldModel[];

  private storageTrustedDevice!: string;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(setTrustedDeviceKey());
    this.getStorageTrustedDevice();
    this.setSignInForm();
  }

  setSignInForm() {
    if (!!this.storageTrustedDevice) {
      this.setSecureSignInForm();
    } else {
      this.setUnsecureSignInForm();
    }
  }

  setSecureSignInForm() {
    this.signInForm = new FormGroup<Record<string, FormControl>>({
      username: new FormControl('', [Validators.required, Validators.email]),
    });

    this.signInFormFields = [
      {
        displayName: 'Correo electrónico',
        controlName: 'username',
        type: iGenericFormFieldType.EMAIL,
        validationMessages: [
          {
            message: 'El correo electrónico es obligatorio.',
            type: iGenericFormFieldValidationType.REQUIRED,
          },
          {
            message: 'El correo electrónico indicado es inválido.',
            type: iGenericFormFieldValidationType.EMAIL,
          },
        ],
      },
    ];
  }

  setUnsecureSignInForm() {
    this.signInForm = new FormGroup<Record<string, FormControl>>({
      username: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });

    this.signInFormFields = [
      {
        displayName: 'Correo electrónico',
        controlName: 'username',
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
        displayName: 'Contraseña',
        controlName: 'password',
        type: iGenericFormFieldType.PASSWORD,
        validationMessages: [
          {
            message: 'La contraseña es requerida.',
            type: iGenericFormFieldValidationType.REQUIRED,
          },
        ],
      },
    ];
  }

  async onSignInInitiated() {
    this.store.dispatch(setIsLoading({ isLoading: true }));

    const username = this.signInForm.controls['username'].value,
      password = !!this.storageTrustedDevice
        ? ''
        : this.signInForm.controls['password'].value;

    console.log(
      `Will sign in with username => ${username} and password => ${password}`,
    );

    try {
      if (!!this.storageTrustedDevice) {
        const signInResult = await signIn({
          username,
          options: {
            authFlowType: 'CUSTOM_WITHOUT_SRP',
          },
        });

        if (
          signInResult.nextStep?.signInStep ===
          'CONFIRM_SIGN_IN_WITH_CUSTOM_CHALLENGE'
        ) {
          console.log('Trusted device sign in result =>', signInResult);

          if (
            !signInResult.isSignedIn &&
            signInResult.nextStep.signInStep ===
              'CONFIRM_SIGN_IN_WITH_CUSTOM_CHALLENGE'
          ) {
            this.store.dispatch(
              setMfaVerificationStep({ mfaVerificationStep: true }),
            );
            this.store.dispatch(setSignInStep({ signInStep: false }));
            this.store.dispatch(setIsLoading({ isLoading: false }));
            console.log('Enter MFA code');
          }
        }
      } else {
        const signInResult = await signIn({
          username,
          password,
          options: {
            authFlowType: 'USER_SRP_AUTH',
          },
        });

        console.log('Untrusted device sign in result =>', signInResult);
      }
      this.store.dispatch(getAuthSession());
      this.store.dispatch(setIsLoading({ isLoading: false }));
    } catch (error) {
      this.store.dispatch(setIsLoading({ isLoading: false }));
      this.store.dispatch(
        setError({
          error:
            'Error de autenticación. Revise su usuario y contraseña e inténtelo nuevamente.',
        }),
      );
      console.log('Sign in error =>', error);
    }
  }

  getStorageTrustedDevice() {
    this.store.select(selectTrustedDeviceKey).subscribe((trustedDeviceKey) => {
      if (!!trustedDeviceKey) this.storageTrustedDevice = trustedDeviceKey;
    });
  }
}
