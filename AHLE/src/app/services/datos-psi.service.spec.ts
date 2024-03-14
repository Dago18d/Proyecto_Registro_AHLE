import { TestBed } from '@angular/core/testing';

import { DatosPsiService } from './datos-psi.service';

describe('DatosPsiService', () => {
  let service: DatosPsiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosPsiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
