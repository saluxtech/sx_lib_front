import { Component, Input } from "@angular/core";
import {
  BasicCardColorVariation,
  BasicCardMargingBottom,
  BasicCardPadding,
  BasicCardRadius
} from './basic-card.types';
import { NgClass, NgStyle } from "@angular/common";

@Component({
  selector: "sx-basic-card",
  templateUrl: "./basic-card.component.html",
  styleUrls: ["./basic-card.component.scss"],
  imports: [NgStyle, NgClass]
})
export class BasicCardComponent {
  @Input() colorVariation: BasicCardColorVariation = 'white';
  @Input() padding: BasicCardPadding = 'sm';
  @Input() margingBottom: BasicCardMargingBottom = 'default'
  @Input() radius: BasicCardRadius = 'xs';
  @Input() width100 = false;
  @Input() basicCardWidth!: string;
  @Input() basicCardHeight: string | undefined;
  @Input() paddingBottom = true;
  @Input() borderColor = '';
}
