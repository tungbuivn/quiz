import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiaComponent } from './chia.component';

describe('ChiaComponent', () => {
  let component: ChiaComponent;
  let fixture: ComponentFixture<ChiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChiaComponent]
    });
    fixture = TestBed.createComponent(ChiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
