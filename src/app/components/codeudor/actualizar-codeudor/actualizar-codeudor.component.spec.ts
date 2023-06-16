import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarCodeudorComponent } from './actualizar-codeudor.component';

describe('ActualizarCodeudorComponent', () => {
  let component: ActualizarCodeudorComponent;
  let fixture: ComponentFixture<ActualizarCodeudorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizarCodeudorComponent]
    });
    fixture = TestBed.createComponent(ActualizarCodeudorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
