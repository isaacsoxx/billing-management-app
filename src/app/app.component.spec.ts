import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { AppComponent } from './app.component';
import { UsersModule, UsersRoutingModule } from '../users';
import { AuthModule } from '../auth';

xdescribe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AmplifyAuthenticatorModule,
        UsersModule,
        UsersRoutingModule,
        AuthModule,
        RouterModule.forRoot([]),
      ],
      declarations: [AppComponent],
      providers: [
        {
          provide: Store,
          useValue: {
            dispatch: jasmine.createSpy(),
            select: jasmine.createSpy().and.returnValue(of({})),
          },
        },
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
