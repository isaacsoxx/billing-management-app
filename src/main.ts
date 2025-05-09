import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { Amplify } from 'aws-amplify';
import { environment } from './environments/environment';
import { sessionStorage } from 'aws-amplify/utils';
import { cognitoUserPoolsTokenProvider } from 'aws-amplify/auth/cognito';

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: environment.aws_cognito.userPoolId,
      userPoolClientId: environment.aws_cognito.userPoolClientId,
      loginWith: {
        phone: true,
      },
      userAttributes: {
        phone_number: { required: true },
      },
      passwordFormat: {
        minLength: 8,
        requireLowercase: true,
        requireUppercase: true,
        requireNumbers: true,
        requireSpecialCharacters: true,
      },
    },
  },
});

cognitoUserPoolsTokenProvider.setKeyValueStorage(sessionStorage);

platformBrowserDynamic()
  .bootstrapModule(AppModule, {
    ngZoneEventCoalescing: true,
  })
  .catch((err) => console.error(err));
