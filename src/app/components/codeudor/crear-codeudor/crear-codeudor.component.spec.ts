import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearCodeudorComponent } from './crear-codeudor.component';

describe('CrearCodeudorComponent', () => {
  let component: CrearCodeudorComponent;
  let fixture: ComponentFixture<CrearCodeudorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearCodeudorComponent]
    });
    fixture = TestBed.createComponent(CrearCodeudorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
