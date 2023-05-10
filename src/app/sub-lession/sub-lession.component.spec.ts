import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubLessionComponent } from './sub-lession.component';

describe('SubLessionComponent', () => {
  let component: SubLessionComponent;
  let fixture: ComponentFixture<SubLessionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubLessionComponent]
    });
    fixture = TestBed.createComponent(SubLessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
