import { Component, Input } from "@angular/core";

@Component({
  selector: "sx-basic-card",
  templateUrl: "./basic-card.component.html",
  styleUrls: ["./basic-card.component.scss"],
  standalone: false
})
export class BasicCardComponent {
  @Input() colorVariation: 'white' | 'gray' | 'blue' | 'blue-notification' = 'white';
  @Input() padding: '0' | 'sm' | 'md' | 'lg' = 'lg';
  @Input() margingBottom: '0' | 'sm' | 'md' | 'lg' | 'default' = 'default'
  @Input() radius: 'sm' | 'md' = 'md';
  @Input() width100: boolean = false;
  @Input() basicCardWidth!: string;
  @Input() basicCardHeight: string | undefined;
  @Input() paddingBottom: boolean = true;
  @Input() borderColor: string = '';
}
