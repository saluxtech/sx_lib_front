import { Component, Input } from '@angular/core';
import moment from "moment";

export interface DadosProfissionalLogadoModel {
  Nome: string;
  Conselho: string;
  Cpf: string;
  Crm: string;
  Funcao: string; 
}

@Component({
  selector: 'sx-assinatura',
  templateUrl: './assinatura.component.html',
  styleUrls: ['./assinatura.component.scss'],
  standalone: false,
})
export class AssinaturaComponent {
  @Input()
  dadosProfissionalLogado!: DadosProfissionalLogadoModel;
  @Input() logoHospital!: string;
  agora = moment().format('DD/MM/yyyy HH:mm');
}
