import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CongDocComponent } from './cong-doc.component';

describe('CongDocComponent', () => {
  let component: CongDocComponent;
  let fixture: ComponentFixture<CongDocComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CongDocComponent]
    });
    fixture = TestBed.createComponent(CongDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
