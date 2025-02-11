import { Directive, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { badgesType } from "../badges/model/bagdges.type";
import { BasicCardColorVariation } from "../basic-card/basic-card.types";


@Directive()
export abstract class CardActionAbstract implements OnInit {

  @Input() icone: string = '';
  @Input() pastaIcone: string = '';
  @Input() temaCard: BasicCardColorVariation = 'white';
  @Input() iconeSecundario: string = '';
  @Input() typeBadges: badgesType = 'alert';
  @Output() botaoAcao: EventEmitter<any> = new EventEmitter<any>();
  @Output() acaoSecundaria: EventEmitter<any> = new EventEmitter<any>();

  constructor() {

  }

  ngOnInit(): void {
      this.pegarCaminhoIcone();
  }

  pegarCaminhoIcone() {
    if (this.pastaIcone) {
      `../../../../assets/img/icons/checagem/`
      this.icone = `../../../../assets/img/icons/${this.pastaIcone}/${this.icone}`;
      return;
    }
    this.icone = `../../../../assets/img/icons/${this.icone}`;
  }

}
