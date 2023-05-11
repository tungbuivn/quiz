import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NhanComponent } from './nhan.component';

describe('NhanComponent', () => {
  let component: NhanComponent;
  let fixture: ComponentFixture<NhanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NhanComponent]
    });
    fixture = TestBed.createComponent(NhanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
