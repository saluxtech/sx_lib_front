import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisaPacienteComponent } from './pesquisa-paciente.component';

describe('PesquisaPacienteComponent', () => {
  let component: PesquisaPacienteComponent;
  let fixture: ComponentFixture<PesquisaPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PesquisaPacienteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PesquisaPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
