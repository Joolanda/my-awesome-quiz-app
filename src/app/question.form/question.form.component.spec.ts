import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Question.FormComponent } from './question.form.component';

describe('Question.FormComponent', () => {
  let component: Question.FormComponent;
  let fixture: ComponentFixture<Question.FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Question.FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Question.FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
