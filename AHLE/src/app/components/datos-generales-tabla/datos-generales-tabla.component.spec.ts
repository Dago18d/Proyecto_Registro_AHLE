import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosGeneralesTablaComponent } from './datos-generales-tabla.component';

describe('DatosGeneralesTablaComponent', () => {
  let component: DatosGeneralesTablaComponent;
  let fixture: ComponentFixture<DatosGeneralesTablaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosGeneralesTablaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatosGeneralesTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
