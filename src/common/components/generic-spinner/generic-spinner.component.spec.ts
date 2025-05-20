import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { GenericSpinnerComponent } from './generic-spinner.component';

describe('GenericSpinnerComponent', () => {
  let component: GenericSpinnerComponent;
  let fixture: ComponentFixture<GenericSpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatProgressSpinnerModule],
      declarations: [GenericSpinnerComponent],
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

    fixture = TestBed.createComponent(GenericSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
