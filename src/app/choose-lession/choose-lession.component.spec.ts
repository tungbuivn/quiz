import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseLessionComponent } from './choose-lession.component';

describe('ChooseLessionComponent', () => {
  let component: ChooseLessionComponent;
  let fixture: ComponentFixture<ChooseLessionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChooseLessionComponent]
    });
    fixture = TestBed.createComponent(ChooseLessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
