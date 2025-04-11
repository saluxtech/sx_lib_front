import { NgClass } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  signal,
  SimpleChanges,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormsModule,
  NgControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ChangesEnum } from '../../enums/changes.enum';
import { OptionModel } from '../../models/select.model';
import { LabelComponent } from '../label/label.component';
import { TagComponent } from '../tag/tag.component';
import { TextComponent } from '../text/text.component';
import { KeyEnum } from './../../models/keyboard.model';

@Component({
  selector: 'sx-select',
  standalone: true,
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
export class SelectComponent implements ControlValueAccessor, OnInit, OnChanges {
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

  writeValue(value: any): void {
    this.value = value;
    const option = this.getSelectedOption();
    if (option) {
      this.singleSelection(option);
    }
  }

  getSelectedOption() {
    return this.options.find((item) => item.value == this.value);
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

  ngOnChanges(changes: SimpleChanges): void {
    if (changes[ChangesEnum.OPTIONS]?.currentValue) {
      const option = this.getSelectedOption();
      if (option) {
        this.singleSelection(option);
      }
    }
  }

  onReset(){
    this.search = '';
    this.value = '';
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
