import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubRemLessionComponent } from './sub-rem-lession.component';

describe('SubRemLessionComponent', () => {
  let component: SubRemLessionComponent;
  let fixture: ComponentFixture<SubRemLessionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubRemLessionComponent]
    });
    fixture = TestBed.createComponent(SubRemLessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
