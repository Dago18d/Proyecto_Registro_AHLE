import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosGeneralesRegistroComponent } from './datos-generales-registro.component';

describe('DatosGeneralesRegistroComponent', () => {
  let component: DatosGeneralesRegistroComponent;
  let fixture: ComponentFixture<DatosGeneralesRegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosGeneralesRegistroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatosGeneralesRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
