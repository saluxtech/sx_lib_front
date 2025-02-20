import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ArrayHeader } from '../models/array-header.model';
import * as moment from 'moment';

@Component({
  selector: 'sx-card-table-accordion',
  templateUrl: './card-table-accordion.component.html',
  styleUrls: ['./card-table-accordion.component.scss'],
  standalone: false
})
export class CardTableAccordionComponent { 

  @Input() data: any = null;
  @Input() arrayHeader: ArrayHeader[] = [];
  @Input() widthCard: number = 100;
  @Input() background: string = '#fff';
  @Input() componentToOpenDialog: Component;
  
  @ViewChild('verMais') accordionCard: ElementRef<HTMLInputElement>;

  mostrandoTodosValores: boolean = false;
  unicVacina;

  constructor(private modalService: NgbModal) {}


  verMaisOuMenos() {
    this.mostrandoTodosValores = !this.mostrandoTodosValores;
  }

  validarData(data) {
    const dataAtual = moment().format('YYYY-MM-DD');
    return moment(data).isSameOrAfter(dataAtual) ? 'red' : 'default';
  }

  openAjusteEstoque(item, lotes) {
    sessionStorage.setItem('VACINA_ESCOLHIDA', JSON.stringify(item))
    const modalRef = this.modalService.open(this.componentToOpenDialog, { backdropClass: 'modal-sidebar-right' });
    modalRef.componentInstance.dataLinha = [item, lotes]
  }

}
