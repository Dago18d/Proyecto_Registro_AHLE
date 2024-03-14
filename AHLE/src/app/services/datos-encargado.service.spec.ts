import { TestBed } from '@angular/core/testing';

import { DatosEncargadoService } from './datos-encargado.service';

describe('DatosEncargadoService', () => {
  let service: DatosEncargadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosEncargadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
