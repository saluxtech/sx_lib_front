import { TestBed } from '@angular/core/testing';

import { HeaderButtonsService } from './shared-buttons.service';

describe('HeaderButtonsService', () => {
  let service: HeaderButtonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeaderButtonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
