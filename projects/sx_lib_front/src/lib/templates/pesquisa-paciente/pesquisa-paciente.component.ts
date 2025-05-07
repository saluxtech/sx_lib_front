import { DatePipe } from '@angular/common';
import { Component, DestroyRef, EventEmitter, inject, input, Input, OnInit, Output } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BasicCardComponent, ButtonComponent, InputComponent, LabelComponent } from '../../components';
import { PesquisaBaaEnum } from '../../enums/pesquisa-baa.enum';
import { PacienteBaaMovimentavel } from '../../models/paciente-baa-movimentavel/paciente-baa-movimentavel.interface';
import { OptionModel } from '../../models/select.model';
import { BaaMovimentavel } from '../../models/baa-movimentavel/baa-movimentavel.interface';

@Component({
  selector: 'sx-pesquisa-paciente',
  imports: [
    InputComponent,
    ReactiveFormsModule,
    LabelComponent,
    ButtonComponent,
    DatePipe,
    MatTableModule,
    MatPaginatorModule,
    MatMenuModule,
    BasicCardComponent
  ],
  templateUrl: './pesquisa-paciente.component.html',
  styleUrl: './pesquisa-paciente.component.scss'
})
export class PesquisaPacienteComponent implements OnInit {
  @Input() modelButton: OptionModel[] = [];
  @Input() list: PacienteBaaMovimentavel[] = [];
  @Input() isLoading: boolean = false;
  @Output() search: EventEmitter<BaaMovimentavel> = new EventEmitter();
  @Output() close:  EventEmitter<void> = new EventEmitter();
  @Output() select: EventEmitter<PacienteBaaMovimentavel> = new EventEmitter();

  modalRef = input<NgbActiveModal>();
  displayedColumns: string[] = ['baa', 'paciente', 'dtNascimento', 'entrada', 'saida'];
  clickedRow: PacienteBaaMovimentavel | null = null;
  PesquisaBaa = PesquisaBaaEnum;
  
  private destroy = inject(DestroyRef);

  form: FormGroup = new FormGroup({
    pl_hosp_logado: new FormControl<number | null>(null),
    pl_ano_baa:     new FormControl<number | null>({ value: 0, disabled: true }),
    pl_nr_baa:      new FormControl<number | null>({ value: 0, disabled: true }, [Validators.required, Validators.pattern(/^[0-9]*$/)]),
    ps_tipo_select: new FormControl<PesquisaBaaEnum | null>(null, [Validators.required]),
    ps_texto:       new FormControl<string>('', [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]),
    ps_tipo_pesq:   new FormControl<PesquisaBaaEnum | null>(null, [Validators.required]),
    ps_nome_ou_baa: new FormControl<PesquisaBaaEnum | null>(PesquisaBaaEnum.NOME_DO_PACIENTE),
  })

  ngOnInit(){
    this.getValueChanges();
  }

  get(){
    this.search.emit(this.form.getRawValue() as BaaMovimentavel);
  }

  closeModal() {
    this.close.emit(this.modalRef()?.dismiss());
  }

  addPatientToForm(paciente: PacienteBaaMovimentavel | null) {
    if(!paciente) return;
    this.clickedRow = paciente;
    this.select.emit(this.clickedRow);
    this.closeModal();
  }

  private getValueChanges() {
    this.form
      .get('ps_nome_ou_baa')?.valueChanges
      .pipe(
        takeUntilDestroyed(this.destroy)
      )
      .subscribe(value => {
        if(value === PesquisaBaaEnum.NOME_DO_PACIENTE) {
          this.form.get('pl_nr_baa')?.disable();
          this.form.get('pl_ano_baa')?.disable();
          this.form.get('ps_texto')?.enable();
          this.form.patchValue({
            pl_ano_baa: 0,
            pl_nr_baa: 0
          });
        } else {
          this.form.get('pl_nr_baa')?.enable();
          this.form.get('pl_ano_baa')?.enable();
          this.form.get('ps_texto')?.disable();
          this.form.patchValue({
            ps_texto: ''
          });
        }
      })
  }
}
