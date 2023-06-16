import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarCodeudorComponent } from './eliminar-codeudor.component';

describe('EliminarCodeudorComponent', () => {
  let component: EliminarCodeudorComponent;
  let fixture: ComponentFixture<EliminarCodeudorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EliminarCodeudorComponent]
    });
    fixture = TestBed.createComponent(EliminarCodeudorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
