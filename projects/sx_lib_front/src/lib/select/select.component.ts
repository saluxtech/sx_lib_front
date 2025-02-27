import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  ControlValueAccessor,
  FormsModule,
  NgControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { LabelModule } from '../label/label.module';
import { OptionModel } from '../models/select.model';
import { TagModule } from '../tag/tag.module';
import { TextModule } from '../text/text.module';

@Component({
  selector: 'sx-select',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    TextModule,
    TagModule,
    LabelModule,
    NgClass,
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

  showOptions = false;
  value: any = '';
  search = '';
  selectedOptions: OptionModel[] = [];
  private onChange: (value: any) => void = () => {};
  private onTouched: () => void = () => {};

  constructor(public formControl: NgControl) {
    this.formControl.valueAccessor = this;
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
    this.showOptions = true;
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
    this.showOptions = false;
    this.onChange(this.value);
    this.onTouched();
  }

  multipleSelection(option: OptionModel): void {
    if (!this.value.find((item: any) => item == option.value)) {
      this.value.push(option.value);
      this.selectedOptions.push(option);
      this.showOptions = false;
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

  onBlur(): void {
    setTimeout(() => {
      this.showOptions = false;
      this.onTouched();
    }, 10);
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
}
