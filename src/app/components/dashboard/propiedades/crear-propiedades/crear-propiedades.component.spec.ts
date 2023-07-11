import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPropiedadesComponent } from './crear-propiedades.component';

describe('CrearPropiedadesComponent', () => {
  let component: CrearPropiedadesComponent;
  let fixture: ComponentFixture<CrearPropiedadesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearPropiedadesComponent]
    });
    fixture = TestBed.createComponent(CrearPropiedadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
