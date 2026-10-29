import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenFormPractice } from './template-driven-form-practice';

describe('TemplateDrivenFormPractice', () => {
  let component: TemplateDrivenFormPractice;
  let fixture: ComponentFixture<TemplateDrivenFormPractice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateDrivenFormPractice]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateDrivenFormPractice);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
