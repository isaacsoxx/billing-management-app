import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnauthorizedIconComponent } from './unauthorized-icon.component';

describe('UnauthorizedIconComponent', () => {
  let component: UnauthorizedIconComponent;
  let fixture: ComponentFixture<UnauthorizedIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UnauthorizedIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnauthorizedIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
