import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosClinicosTablaComponent } from './datos-clinicos-tabla.component';

describe('DatosClinicosTablaComponent', () => {
  let component: DatosClinicosTablaComponent;
  let fixture: ComponentFixture<DatosClinicosTablaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosClinicosTablaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatosClinicosTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
