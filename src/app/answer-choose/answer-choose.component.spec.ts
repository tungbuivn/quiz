import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerChooseComponent } from './answer-choose.component';

describe('AnswerChooseComponent', () => {
  let component: AnswerChooseComponent;
  let fixture: ComponentFixture<AnswerChooseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnswerChooseComponent]
    });
    fixture = TestBed.createComponent(AnswerChooseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
