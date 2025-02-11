import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CepPipe, cpfCnpjPipe, DateInputPipe, TruncatePipe } from 'sx';

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
