import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PesquisaPacienteFiaComponent } from './pesquisa-paciente-fia.component';

describe('PesquisaPacienteFiaComponent', () => {
  let component: PesquisaPacienteFiaComponent;
  let fixture: ComponentFixture<PesquisaPacienteFiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PesquisaPacienteFiaComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(PesquisaPacienteFiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});