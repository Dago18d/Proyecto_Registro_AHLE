import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExInternosTablaComponent } from './ex-internos-tabla.component';

describe('ExInternosTablaComponent', () => {
  let component: ExInternosTablaComponent;
  let fixture: ComponentFixture<ExInternosTablaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExInternosTablaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExInternosTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
