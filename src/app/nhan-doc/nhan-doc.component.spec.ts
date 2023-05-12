import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NhanDocComponent } from './nhan-doc.component';

describe('NhanDocComponent', () => {
  let component: NhanDocComponent;
  let fixture: ComponentFixture<NhanDocComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NhanDocComponent]
    });
    fixture = TestBed.createComponent(NhanDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
