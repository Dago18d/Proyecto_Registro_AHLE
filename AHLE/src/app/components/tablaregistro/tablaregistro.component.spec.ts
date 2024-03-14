import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaregistroComponent } from './tablaregistro.component';

describe('TablaregistroComponent', () => {
  let component: TablaregistroComponent;
  let fixture: ComponentFixture<TablaregistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaregistroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaregistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
