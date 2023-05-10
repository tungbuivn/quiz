import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRemLessionComponent } from './add-rem-lession.component';

describe('AddRemLessionComponent', () => {
  let component: AddRemLessionComponent;
  let fixture: ComponentFixture<AddRemLessionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddRemLessionComponent]
    });
    fixture = TestBed.createComponent(AddRemLessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
