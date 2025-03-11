import { Component, Input } from "@angular/core";
import { labelSizeType, labelType, labelColorType } from "./label.type";

@Component({
  selector: "sx-label",
  templateUrl: "./label.component.html",
  styleUrls: ["./label.component.scss"],
  standalone: true
})
export class LabelComponent {
  @Input() type: labelType = 'content';
  @Input() color: labelColorType = "default";
  @Input() for: string = "";
  @Input() size: labelSizeType = "default";
  @Input() isPDF: boolean = false;
  @Input() weight: string = ''
}
