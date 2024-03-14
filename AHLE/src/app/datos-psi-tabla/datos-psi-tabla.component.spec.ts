import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosPsiTablaComponent } from './datos-psi-tabla.component';

describe('DatosPsiTablaComponent', () => {
  let component: DatosPsiTablaComponent;
  let fixture: ComponentFixture<DatosPsiTablaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosPsiTablaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatosPsiTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
