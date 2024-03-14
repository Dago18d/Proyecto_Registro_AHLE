import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExInternosRegistroComponent } from './ex-internos-registro.component';

describe('ExInternosRegistroComponent', () => {
  let component: ExInternosRegistroComponent;
  let fixture: ComponentFixture<ExInternosRegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExInternosRegistroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExInternosRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
