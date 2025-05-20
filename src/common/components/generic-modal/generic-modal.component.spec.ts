import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatDialogModule } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { GenericModalComponent } from './generic-modal.component';

describe('GenericFormComponent', () => {
  let component: GenericModalComponent;
  let fixture: ComponentFixture<GenericModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatDialogModule],
      declarations: [GenericModalComponent],
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

    fixture = TestBed.createComponent(GenericModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
