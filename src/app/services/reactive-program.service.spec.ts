import { TestBed } from '@angular/core/testing';

import { ReactiveProgramService } from './reactive-program.service';

describe('ReactiveProgramService', () => {
  let service: ReactiveProgramService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReactiveProgramService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
