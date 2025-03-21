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
  @Input() padding: BasicCardPadding = 'lg';
  @Input() margingBottom: BasicCardMargingBottom = 'default'
  @Input() radius: BasicCardRadius = 'md';
  @Input() width100: boolean = false;
  @Input() basicCardWidth!: string;
  @Input() basicCardHeight: string | undefined;
  @Input() paddingBottom: boolean = true;
  @Input() borderColor: string = '';
}
