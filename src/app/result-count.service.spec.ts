import { TestBed } from '@angular/core/testing';

import { ResultCountService } from './result-count.service';

describe('ResultCountService', () => {
  let service: ResultCountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResultCountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
