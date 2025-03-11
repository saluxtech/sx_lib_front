import { NgClass, NgIf } from '@angular/common';
import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import { TextComponent } from '../text/text.component';
import { LabelComponent } from '../label/label.component';

@Component({
  selector: 'sx-accordion-cards',
  templateUrl: './accordion-cards.component.html',
  styleUrls: ['./accordion-cards.component.scss'],
  imports: [NgClass, NgIf, LabelComponent, TextComponent]
})
export class AccordionCardsComponent implements OnInit {
  @Input() limiteCards: number = 2;
  @Input() widthCard: string = '100%';
  @Input() heightCard: number = 400;
  @Input()
  quantidadeAtual!: number;
  @Input() background: string = '#ECECEC';
  @Input()
  footerText!: string;

  mostrandoTodosValores: boolean = false;

  @ViewChild('verMais')
  accordionCard!: ElementRef<HTMLInputElement>;

  constructor() { }

  ngOnInit(): void {
  }

  verMaisOuMenos() {
    if (this.quantidadeAtual <= this.limiteCards) return;
    this.mostrandoTodosValores = !this.mostrandoTodosValores;
    this.accordionCard.nativeElement.style.height = this.mostrandoTodosValores ? 'auto' : `${this.heightCard}px`;
  }

}
