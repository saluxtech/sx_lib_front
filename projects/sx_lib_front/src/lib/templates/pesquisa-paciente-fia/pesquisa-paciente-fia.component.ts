import { DatePipe } from '@angular/common';
import { Component, DestroyRef, EventEmitter, inject, input, Input, OnInit, Output } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BasicCardComponent, ButtonComponent, InputComponent, LabelComponent } from '../../components';
import { PesquisaFiaEnum } from '../../enums/pesquisa-fia.enum';
import { FiaMovimentavel } from '../../models/fia-movimentavel/fia-movimentavel.interface';
import { PacienteFiaMovimentavel } from '../../models/paciente-fia-movimentavel/paciente-fia-movimentavel.interface';
import { OptionModel } from '../../models/select.model';

@Component({
  selector: 'sx-pesquisa-paciente-fia',
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
  templateUrl: './pesquisa-paciente-fia.component.html',
  styleUrls: ['./pesquisa-paciente-fia.component.scss']
})
export class PesquisaPacienteFiaComponent implements OnInit {
  @Input() modelButton: OptionModel[] = [];
  @Input() list: PacienteFiaMovimentavel[] = [];
  @Input() isLoading = false;
  @Output() search = new EventEmitter<FiaMovimentavel>();
  @Output() close = new EventEmitter<void>();
  @Output() select = new EventEmitter<PacienteFiaMovimentavel>();

  modalRef = input<NgbActiveModal>();
  displayedColumns = ['hospital', 'fia', 'paciente', 'dtNascimento', 'entrada', 'saida'];
  clickedRow: PacienteFiaMovimentavel | null = null;
  PesquisaFia = PesquisaFiaEnum;

  private destroy = inject(DestroyRef);

  form = new FormGroup({
    pcd_hospital: new FormControl<number | null>(null),
    pnm_paciente: new FormControl<string>('', [Validators.pattern(/^[a-zA-Z\s]*$/)]),
    pnr_fia: new FormControl<number | null>({ value: 0, disabled: true }, [Validators.pattern(/^[0-9]*$/)]),
    pdt_ano_fia: new FormControl<number | null>({ value: 0, disabled: true }, [Validators.pattern(/^[0-9]*$/)]),
    ptodos: new FormControl<PesquisaFiaEnum | null>(PesquisaFiaEnum.SOMENTE_ABERTAS),
    ps_nome_ou_fia: new FormControl<PesquisaFiaEnum | null>(PesquisaFiaEnum.NOME_DO_PACIENTE),
    ps_tipo_select: new FormControl<PesquisaFiaEnum | null>(PesquisaFiaEnum.APENAS_NO_INICIO)
  });

  ngOnInit(): void {
    this.getValueChanges();
  }

  get(): void {
    this.search.emit(this.form.getRawValue() as FiaMovimentavel);
  }

  closeModal(): void {
    this.close.emit(this.modalRef()?.dismiss());
  }

  addPatientToForm(paciente: PacienteFiaMovimentavel | null): void {
    if (!paciente) {
      return;
    }
    this.clickedRow = paciente;
    this.select.emit(this.clickedRow);
    this.closeModal();
  }

  private getValueChanges(): void {
    this.form
      .get('ps_nome_ou_fia')
      ?.valueChanges
      .pipe(takeUntilDestroyed(this.destroy))
      .subscribe(value => {
        if (value === this.PesquisaFia.NOME_DO_PACIENTE) {
          this.form.get('pnr_fia')?.disable();
          this.form.get('pdt_ano_fia')?.disable();
          this.form.get('pnm_paciente')?.enable();
          this.form.patchValue({ pnr_fia: 0, pdt_ano_fia: 0 });
        } else {
          this.form.get('pnr_fia')?.enable();
          this.form.get('pdt_ano_fia')?.enable();
          this.form.get('pnm_paciente')?.disable();
          this.form.patchValue({ pnm_paciente: '' });
        }
      });
  }
}