import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadErrorIconComponent } from './load-error-icon.component';

describe('LoadErrorIconComponent', () => {
  let component: LoadErrorIconComponent;
  let fixture: ComponentFixture<LoadErrorIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoadErrorIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadErrorIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
