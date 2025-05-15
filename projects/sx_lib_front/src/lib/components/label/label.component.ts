import { Component, Input } from "@angular/core";
import { labelSizeType, labelType, labelColorType } from "./label.type";

@Component({
  selector: "sx-label",
  templateUrl: "./label.component.html",
  styleUrls: ["./label.component.scss"],
})
export class LabelComponent {
  @Input() type: labelType = 'content';
  @Input() color: labelColorType = "default";
  @Input() for = "";
  @Input() size: labelSizeType = "default";
  @Input() isPDF = false;
  @Input() weight = ''
}
