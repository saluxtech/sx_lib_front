import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CepPipe } from "../pipes/cep.pipe";
import { cpfCnpjPipe } from "../pipes/cpf-cnpj.pipe";
import { DateInputPipe } from "../pipes/date-input.pipe";
import { TruncatePipe } from "../pipes/truncate.pipe";

@NgModule({
  declarations: [
    CepPipe,
    cpfCnpjPipe,
    TruncatePipe,
    DateInputPipe,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CepPipe,
    cpfCnpjPipe,
    TruncatePipe,
    DateInputPipe,
  ]
})
export class PipeModule { }
