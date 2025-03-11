import { ChangeDetectionStrategy, Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';


@Component({
  selector: 'sx-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true
    }
  ]
})
export class CheckboxComponent implements ControlValueAccessor {

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
