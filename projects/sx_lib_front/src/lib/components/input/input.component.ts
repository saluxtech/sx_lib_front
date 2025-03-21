import { NgClass, NgStyle, TitleCasePipe } from '@angular/common';
import {
  Component,
  EventEmitter,
  forwardRef,
  inject,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import {
  ControlContainer,
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { Subscription } from 'rxjs';
import { SxInputVariation } from '../../models/input.model';
import { LabelComponent } from '../label/label.component';
import { LoaderComponent } from '../loader/loader.component';
import { TextComponent } from '../text/text.component';

@Component({
  selector: 'sx-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  imports: [
    ReactiveFormsModule,
    NgxMaskDirective,
    NgStyle,
    NgClass,
    TextComponent,
    LoaderComponent,
    LabelComponent,
  ],
  providers: [
    TitleCasePipe,
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
    provideNgxMask(),
  ],
})
export class InputComponent implements ControlValueAccessor, OnInit, OnDestroy {
  @Input() label: string = '';
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() mask: string | null = null;
  @Input() dropSpecialCharacters: boolean = true;
  @Input() theme: 'light' | 'dark' | 'light-2' = 'dark';
  @Input() prefix: boolean = false;
  @Input() suffix: boolean = false;
  @Input() isReadonly: boolean = false;
  @Input() maxLength: number = 9999;
  @Input() isLoading: boolean = false;
  @Input() prefixIcon: boolean = false;
  @Input() formControlName: string = 'defaultFormControlName';
  @Input() height: 'sm' | 'lg' = 'sm';
  @Input() errorMessage: string = 'Campo obrigatório';
  @Input() showAsterisco: boolean = true;
  @Input() validation: boolean = true;
  @Input() variationLabel: SxInputVariation = 'label-input';
  @Input() limitWidth: boolean = false;
  @Input() textColor: string = '';
  @Input() marginField: number = 0;
  @Input() leftIcon: string = '';
  @Input() focusColor: string = '';
  @Output() changeValue: EventEmitter<any> = new EventEmitter<any>();

  control: FormControl = new FormControl();
  value: string = '';
  originalType: string = '';
  showPassword: boolean = false;

  onChange: any = () => {};
  onTouch: any = () => {};

  controlContainer = inject(ControlContainer);
  titleCasePipe = inject(TitleCasePipe);
  subscriptions: Subscription[] = [];

  ngOnInit(): void {
    this.originalType = this.type;
    if (
      this.controlContainer.control &&
      this.controlContainer.control.get(this.formControlName)
    ) {
      this.control = this.controlContainer.control.get(
        this.formControlName
      ) as FormControl;
      this.value = this.control.value;
    }
    const subscripition = this.control.valueChanges.subscribe((value) => {
      this.changeValue.emit(value);
      this.value = value;
    });
    this.subscriptions.push(subscripition);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscripition) => subscripition.unsubscribe());
  }

  writeValue(value: any): void {
    if (value) {
      this.value = value;
      this.onChange(this.value);
      this.onTouch();
      this.changeValue.emit(this.value);
    }
  }

  registerOnChange(fn: any): void {
    if (
      isNaN(this.control.value) &&
      this.control.value &&
      this.control.value.charAt
    ) {
      const capitalizedValue = this.titleCasePipe.transform(this.control.value);
      this.control.patchValue(capitalizedValue);
    }
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState?(isDisabled: boolean): void {}

  get isRequired(): boolean {
    return this.control?.hasValidator(Validators.required) ?? false;
  }

  clearInput(): void {
    this.control.setValue('');
    this.value = '';
    this.onChange('');
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
    this.type = this.showPassword ? 'text' : 'password';
  }
}
