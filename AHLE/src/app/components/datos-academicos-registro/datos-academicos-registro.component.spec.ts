import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosAcademicosRegistroComponent } from './datos-academicos-registro.component';

describe('DatosAcademicosRegistroComponent', () => {
  let component: DatosAcademicosRegistroComponent;
  let fixture: ComponentFixture<DatosAcademicosRegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosAcademicosRegistroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatosAcademicosRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
