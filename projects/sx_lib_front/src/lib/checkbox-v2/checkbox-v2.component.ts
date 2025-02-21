import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-sx-checkbox-v2',
  templateUrl: './sx-checkbox-v2.component.html',
  styleUrls: ['./sx-checkbox-v2.component.scss'],
  standalone: false
})
export class CheckboxV2Component implements ControlValueAccessor {

  @Input() label: string = "";
  @Input() disabled: boolean = false;
  @Output() checkboxChange = new EventEmitter<boolean>();

  isChecked: boolean = false;
  id: string = 'sxCheckbox' + Math.random();

  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(value: any): void {
    this.isChecked = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  toggleCheckbox() {
    this.isChecked = !this.isChecked;
    this.onChange(this.isChecked);
    this.onTouched();
  }

  onMark(event: any) {
    this.checkboxChange.emit(event.checked);
  }

}
