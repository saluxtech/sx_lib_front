import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import moment from 'moment';
import { ArrayHeader, LabelComponent, PipeDisplayComponent } from 'sx_lib_front';

@Component({
  selector: 'sx-card-table-accordion',
  templateUrl: './card-table-accordion.component.html',
  styleUrls: ['./card-table-accordion.component.scss'],
  imports: [LabelComponent, PipeDisplayComponent, NgClass, NgFor, NgIf]
})
export class CardTableAccordionComponent { 

  @Input() data: any = null;
  @Input() arrayHeader: ArrayHeader[] = [];
  @Input() widthCard: number = 100;
  @Input() background: string = '#fff';
  @Input() componentToOpenDialog!: Component;
  
  @ViewChild('verMais') accordionCard!: ElementRef<HTMLInputElement>;

  mostrandoTodosValores: boolean = false;
  unicVacina!: any;

  constructor(private modalService: NgbModal) {}


  verMaisOuMenos() {
    this.mostrandoTodosValores = !this.mostrandoTodosValores;
  }

  validarData(data: any) {
    const dataAtual = moment().format('YYYY-MM-DD');
    return moment(data).isSameOrAfter(dataAtual) ? 'red' : 'default';
  }

  openAjusteEstoque(item:any, lotes: any) {
    sessionStorage.setItem('VACINA_ESCOLHIDA', JSON.stringify(item))
    const modalRef = this.modalService.open(this.componentToOpenDialog, { backdropClass: 'modal-sidebar-right' });
    modalRef.componentInstance.dataLinha = [item, lotes]
  }

}
