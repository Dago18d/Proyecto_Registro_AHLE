import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosClinicosRegistroComponent } from './datos-clinicos-registro.component';

describe('DatosClinicosRegistroComponent', () => {
  let component: DatosClinicosRegistroComponent;
  let fixture: ComponentFixture<DatosClinicosRegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosClinicosRegistroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatosClinicosRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
