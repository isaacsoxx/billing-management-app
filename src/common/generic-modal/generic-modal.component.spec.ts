import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericFormModalComponent } from './generic-modal.component';

describe('GenericFormModalComponent', () => {
  let component: GenericFormModalComponent;
  let fixture: ComponentFixture<GenericFormModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GenericFormModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenericFormModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
