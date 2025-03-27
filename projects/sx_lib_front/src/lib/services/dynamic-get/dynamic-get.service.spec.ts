import { TestBed } from '@angular/core/testing';

import { DynamicGetService } from './dynamic-get.service';

describe('DynamicGetService', () => {
  let service: DynamicGetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DynamicGetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
