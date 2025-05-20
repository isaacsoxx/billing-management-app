import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Store } from '@ngrx/store';
import { UsersProfileComponent } from './users-profile.component';
import { CommonModule } from '@angular/common';
import { of } from 'rxjs';

describe('UsersProfileComponent', () => {
  let component: UsersProfileComponent;
  let fixture: ComponentFixture<UsersProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule],
      declarations: [UsersProfileComponent],
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

    fixture = TestBed.createComponent(UsersProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
