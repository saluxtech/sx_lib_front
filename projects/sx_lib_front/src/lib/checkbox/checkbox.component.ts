import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from "@angular/core";

@Component({
  selector: "sx-checkbox",
  standalone: false,
  templateUrl: "./sx-checkbox.component.html",
  styleUrls: ["./sx-checkbox.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class CheckboxComponent {
  @Input() label: string = "";
  @Input() checked: boolean = false;
  @Output() onChange = new EventEmitter<boolean>();

  constructor() {}

  toggleChecked(event) {
    this.checked = !this.checked;
    this.onChange.emit(this.checked);
  }
}
