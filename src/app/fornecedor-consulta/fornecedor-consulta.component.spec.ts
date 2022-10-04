import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FornecedorConsultaComponent } from './fornecedor-consulta.component';

describe('FornecedorConsultaComponent', () => {
  let component: FornecedorConsultaComponent;
  let fixture: ComponentFixture<FornecedorConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FornecedorConsultaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FornecedorConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
