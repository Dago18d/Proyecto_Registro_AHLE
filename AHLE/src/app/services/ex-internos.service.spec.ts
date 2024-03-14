import { TestBed } from '@angular/core/testing';

import { ExInternosService } from './ex-internos.service';

describe('ExInternosService', () => {
  let service: ExInternosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExInternosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
