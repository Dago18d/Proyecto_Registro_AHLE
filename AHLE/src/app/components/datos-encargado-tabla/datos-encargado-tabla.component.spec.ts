import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosEncargadoTablaComponent } from './datos-encargado-tabla.component';

describe('DatosEncargadoTablaComponent', () => {
  let component: DatosEncargadoTablaComponent;
  let fixture: ComponentFixture<DatosEncargadoTablaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosEncargadoTablaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatosEncargadoTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
