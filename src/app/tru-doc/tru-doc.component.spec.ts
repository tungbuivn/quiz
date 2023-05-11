import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TruDocComponent } from './tru-doc.component';

describe('TruDocComponent', () => {
  let component: TruDocComponent;
  let fixture: ComponentFixture<TruDocComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TruDocComponent]
    });
    fixture = TestBed.createComponent(TruDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
