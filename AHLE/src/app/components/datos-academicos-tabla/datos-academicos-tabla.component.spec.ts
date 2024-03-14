import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosAcademicosTablaComponent } from './datos-academicos-tabla.component';

describe('DatosAcademicosTablaComponent', () => {
  let component: DatosAcademicosTablaComponent;
  let fixture: ComponentFixture<DatosAcademicosTablaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosAcademicosTablaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatosAcademicosTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
