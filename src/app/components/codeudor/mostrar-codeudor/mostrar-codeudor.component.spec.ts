import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarCodeudorComponent } from './mostrar-codeudor.component';

describe('MostrarCodeudorComponent', () => {
  let component: MostrarCodeudorComponent;
  let fixture: ComponentFixture<MostrarCodeudorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MostrarCodeudorComponent]
    });
    fixture = TestBed.createComponent(MostrarCodeudorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
