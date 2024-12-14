import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericPopupBarComponent } from './generic-popup-bar.component';

describe('GenericPopupBarComponent', () => {
  let component: GenericPopupBarComponent;
  let fixture: ComponentFixture<GenericPopupBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GenericPopupBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenericPopupBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
