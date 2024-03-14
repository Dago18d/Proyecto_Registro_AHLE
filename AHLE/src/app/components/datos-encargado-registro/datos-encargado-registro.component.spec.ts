import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosEncargadoRegistroComponent } from './datos-encargado-registro.component';

describe('DatosEncargadoRegistroComponent', () => {
  let component: DatosEncargadoRegistroComponent;
  let fixture: ComponentFixture<DatosEncargadoRegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosEncargadoRegistroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatosEncargadoRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
