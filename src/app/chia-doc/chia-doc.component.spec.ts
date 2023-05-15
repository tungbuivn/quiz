import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiaDocComponent } from './chia-doc.component';

describe('ChiaDocComponent', () => {
  let component: ChiaDocComponent;
  let fixture: ComponentFixture<ChiaDocComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChiaDocComponent]
    });
    fixture = TestBed.createComponent(ChiaDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
