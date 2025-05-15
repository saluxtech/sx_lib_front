import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  forwardRef,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormControl,
  FormsModule,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Subscription } from 'rxjs';
import { LabelComponent } from '../label/label.component';
import { TextComponent } from '../text/text.component';
import { TextStyleEnum } from '../../models/text-area.model';

@Component({
  selector: 'sx-textarea',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.scss'],
  imports: [TextComponent, LabelComponent, FormsModule, ReactiveFormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextareaComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => TextareaComponent),
      multi: true,
    },
  ],
})
export class TextareaComponent
  implements ControlValueAccessor, OnInit, OnDestroy, AfterViewInit
{
  @ViewChild('textArea') textArea!: ElementRef;
  @ViewChild('textAreaContainer') textAreaContainer!: ElementRef;

  @Input() cols = '';
  @Input() rows = '';
  @Input() textareaHeight: string | null = null;
  @Input() textareaWidth: string | null = null;
  @Input() label = '';
  @Input() labelError = '';
  @Input() placeholder = '';
  @Input() theme: 'light' | 'dark' | 'white' = 'light';
  @Input() showCustomizeText = true;
  @Input() disableMaxLength = false;
  @Input() maxLength = 1000;
  @Output() blur = new EventEmitter<any>();
  @Input() required = false;

  control: FormControl = new FormControl('');
  controlFromOutside!: AbstractControl;
  subscriptions: Subscription[] = [];
  stringCount = '0';
  textAreaValue = '';
  selectedArea = '';
  textWithTag = '';
  validators = Validators;
  isBold = false;
  isItalic = false;
  isUnderline = false;
  isStrikethrough = false;
  textStyleEnum = TextStyleEnum;

  ngOnInit(): void {
    this.controlSubscribe();
  }

  ngAfterViewInit(): void {
    this.textArea.nativeElement.setAttribute(
      'data-placeholder',
      this.placeholder
    );
  }

  controlSubscribe() {
    const subscription = this.control.valueChanges.subscribe((valor) => {
      if (valor) {
        this.stringCount = valor.length.toString();
      } else {
        this.stringCount = '0';
      }
    });
    this.subscriptions.push(subscription);
  }

  setControlValue() {
    let currentValue = this.textArea.nativeElement.innerText.trim();

    if (currentValue.length > this.maxLength && !this.disableMaxLength) {
      currentValue = currentValue.substring(0, this.maxLength);
      this.textArea.nativeElement.innerText = currentValue;
    }

    const [value] = currentValue.split('&');
    currentValue = value;

    this.control.setValue(currentValue === '' ? null : currentValue);
    this.stringCount = currentValue.length.toString();
  }

  writeValue(value: any): void {
    if (value && value.length > this.maxLength && !this.disableMaxLength) {
      value = value.substring(0, this.maxLength);
    }
    this.control.setValue(value);
    setTimeout(() => {
      this.textArea.nativeElement.innerHTML = value;
      this.stringCount = value ? value.length.toString() : '0';
    }, 200);
  }

  registerOnChange(fn: any): void {
    const subscription = this.control.valueChanges.subscribe(fn);
    this.subscriptions.push(subscription);
  }

  registerOnTouched(fn: any): void {
    const subscription = this.control.valueChanges.subscribe(fn);
    this.subscriptions.push(subscription);
  }

  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.control.disable() : this.control.enable();
  }

  validate(control: AbstractControl): ValidationErrors | null {
    this.controlFromOutside = control;
    return this.control.errors;
  }

  formatText(textStyle: TextStyleEnum) {
    this.focusTextArea(() => {
      switch (textStyle) {
        case this.textStyleEnum.Bold:
          this.isBold = !this.isBold;
          document.execCommand('bold');
          break;
        case this.textStyleEnum.Italic:
          this.isItalic = !this.isItalic;
          document.execCommand('italic');
          break;
        case this.textStyleEnum.Underline:
          this.isUnderline = !this.isUnderline;
          document.execCommand('underline');
          break;
        case this.textStyleEnum.StrikeThrough:
          this.isStrikethrough = !this.isStrikethrough;
          document.execCommand('strikeThrough');
          break;
        default:
          break;
      }
    });
  }

  getTextWithTag() {
    const selection = window.getSelection();
    this.selectedArea = selection ? selection.toString() : '';
  }

  getSelectedText() {
    const selection = window.getSelection();
    this.selectedArea = selection ? selection.toString() : '';
  }

  emitBlur() {
    this.blur.emit();
  }

  changeBorder() {
    this.textAreaContainer.nativeElement.classList.toggle('border');
  }

  limiteCaractere(event: KeyboardEvent) {
    const inputElement = event.target as HTMLDivElement;
    const textLength = inputElement.innerText.length;
    const selection = window.getSelection();
    const selectedTextLength = selection ? selection.toString().length : 0;

    if (
      textLength - selectedTextLength >= this.maxLength &&
      !this.disableMaxLength
    ) {
      event.preventDefault();
    }
  }

  onPaste(event: ClipboardEvent): void {
    const inputElement = event.target as HTMLDivElement;
    const textLength = inputElement.innerText.length;
    const selection = window.getSelection();
    const selectedTextLength = selection ? selection.toString().length : 0;
    if (
      textLength - selectedTextLength >= this.maxLength &&
      !this.disableMaxLength
    ) {
      event.preventDefault();
    }
  }

  focusTextArea(callback: Function) {
    this.textArea.nativeElement.focus();
    setTimeout(() => {
      callback();
    }, 0);
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  get isRequired(): boolean {
    return this.control?.hasValidator(Validators.required) ?? false;
  }
}
