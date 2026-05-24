import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceTrustConfirmComponent } from './device-trust-confirm.component';

describe('DeviceTrustConfirmComponent', () => {
  let component: DeviceTrustConfirmComponent;
  let fixture: ComponentFixture<DeviceTrustConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeviceTrustConfirmComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeviceTrustConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
