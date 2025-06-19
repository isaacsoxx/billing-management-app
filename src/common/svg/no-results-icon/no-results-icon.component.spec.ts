import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoResultsIconComponent } from './no-results-icon.component';

describe('NoResultsComponent', () => {
  let component: NoResultsIconComponent;
  let fixture: ComponentFixture<NoResultsIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoResultsIconComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NoResultsIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
