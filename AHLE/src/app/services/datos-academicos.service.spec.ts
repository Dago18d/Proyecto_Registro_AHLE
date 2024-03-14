import { TestBed } from '@angular/core/testing';

import { DatosAcademicosService } from './datos-academicos.service';

describe('DatosAcademicosService', () => {
  let service: DatosAcademicosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosAcademicosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
