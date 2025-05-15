import { Directive, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { BasicCardColorVariation } from "../basic-card/basic-card.types";
import { badgesType } from "../badges";


@Directive()
export abstract class CardActionAbstract implements OnInit {

  @Input() icone = '';
  @Input() pastaIcone = '';
  @Input() temaCard: BasicCardColorVariation = 'white';
  @Input() iconeSecundario = '';
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
