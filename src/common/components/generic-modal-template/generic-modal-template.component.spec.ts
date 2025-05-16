import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericModalTemplateComponent } from './generic-modal-template.component';

describe('GenericModalTemplateComponent', () => {
  let component: GenericModalTemplateComponent;
  let fixture: ComponentFixture<GenericModalTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GenericModalTemplateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenericModalTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
