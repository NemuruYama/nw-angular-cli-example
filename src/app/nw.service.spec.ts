import { TestBed } from '@angular/core/testing';

import { NWService } from './nw.service';

describe('NWService', () => {
  let service: NWService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NWService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
