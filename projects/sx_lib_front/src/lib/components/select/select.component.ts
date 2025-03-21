import { KeyEnum } from './../../models/keyboard.model';
import { NgClass } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  signal,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormsModule,
  NgControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { LabelComponent } from '../label/label.component';
import { TextComponent } from '../text/text.component';
import { OptionModel } from '../../models/select.model';
import { TagComponent } from '../tag/tag.component';

@Component({
  selector: 'sx-select',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgClass,
    LabelComponent,
    TagComponent,
    TextComponent,
  ],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss',
})
export class SelectComponent implements ControlValueAccessor, OnInit {
  @Input() options: OptionModel[] = [];
  @Input() label: string = '';
  @Input() placeholder: string = 'Selecione...';
  @Input() errorMessage: string = 'Preencher esse campo.';
  @Input() multiple = false;
  @Input() theme: string = 'dark';
  @Input() limitWidth: boolean = false;
  @Output() change = new EventEmitter<any>();

  showOptions = signal(false);
  value: any = '';
  search = '';
  selectedOptions: OptionModel[] = [];
  protected selectedIndex: number = -1;
  private onChange: (value: any) => void = () => {};
  private onTouched: () => void = () => {};

  constructor(public formControl: NgControl) {
    this.formControl.valueAccessor = this;
  }

  protected selectOptionWithArrows(event: KeyboardEvent) {
    if (event.key === KeyEnum.ArrowDown) {
      this.selectedIndex =
        (this.selectedIndex + 1) % this.displayOptions.length;
      event.preventDefault();
    } else if (event.key === KeyEnum.ArrowUp) {
      this.selectedIndex =
        (this.selectedIndex - 1 + this.displayOptions.length) %
        this.displayOptions.length;
      event.preventDefault();
    } else if (event.key === KeyEnum.Enter && this.selectedIndex >= 0) {
      this.selectItem(this.displayOptions[this.selectedIndex]);
      event.preventDefault();
    }
  }

  writeValue(value: any): void {
    const option = this.options.find((item) => item.value == value);
    if (option) {
      this.singleSelection(option);
    }
  }

  registerOnChange(fn: (value: any) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  ngOnInit(): void {
    if (this.multiple) this.value = [];
  }

  onSearch(): void {
    this.showOptions.set(true);
  }

  selectItem(option: OptionModel): void {
    if (this.multiple) {
      this.multipleSelection(option);
    } else {
      this.singleSelection(option);
    }
  }

  singleSelection(option: OptionModel): void {
    this.search = option.label;
    this.value = option.value;
    this.showOptions.set(false);
    this.onChange(this.value);
    this.onTouched();
  }

  multipleSelection(option: OptionModel): void {
    if (!this.value.find((item: any) => item == option.value)) {
      this.value.push(option.value);
      this.selectedOptions.push(option);
      this.showOptions.set(false);
      this.onChange(this.value);
      this.onTouched();
    }
  }

  removeItem(index: number): void {
    this.value.splice(index, 1);
    this.selectedOptions.splice(index, 1);
    this.onChange(this.value);
    this.onTouched();
  }

  focusout(): void {
    this.showOptions.set(false);
    this.onTouched();
  }

  get hasErrors(): boolean {
    return (
      this.formControl?.control!.touched && this.formControl?.control.invalid
    );
  }

  get displayOptions(): OptionModel[] {
    return this.options.filter((item) =>
      item.label?.toString().toUpperCase().includes(this.search.toUpperCase())
    );
  }

  get isRequired(): boolean {
    return (
      this.formControl?.control?.hasValidator(Validators.required) ?? false
    );
  }

  highlight(label: string): string {
    if (!this.search) {
      return label;
    }
    const regex = new RegExp(`(${this.search})`, 'gi');
    return label.replace(regex, '<strong>$1</strong>');
  }
}
