import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersComponent } from './users.component';
import {
  UsersFormComponent,
  UsersRegisterComponent,
  UsersTableComponent,
} from './components';
import { select, Store } from '@ngrx/store';
import { of } from 'rxjs';
import { GenericModalComponent, GenericTableComponent } from '../common';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatTableModule, MatIconModule],
      declarations: [
        UsersComponent,
        UsersRegisterComponent,
        UsersFormComponent,
        UsersTableComponent,
        GenericModalComponent,
        GenericTableComponent,
      ],
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

    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
