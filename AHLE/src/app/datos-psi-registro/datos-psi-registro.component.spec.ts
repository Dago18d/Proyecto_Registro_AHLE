import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosPsiRegistroComponent } from './datos-psi-registro.component';

describe('DatosPsiRegistroComponent', () => {
  let component: DatosPsiRegistroComponent;
  let fixture: ComponentFixture<DatosPsiRegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosPsiRegistroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatosPsiRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
