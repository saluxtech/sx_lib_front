import { Component, EventEmitter, forwardRef, Input, OnDestroy, OnInit, Output } from '@angular/core';
import {
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { Editor, NgxEditorModule } from 'ngx-editor';


@Component({
  selector: 'sx-text-editor',
  imports: [NgxEditorModule, FormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextEditorComponent),
      multi: true,
    },
  ],
  templateUrl: './text-editor.component.html',
  styleUrl: './text-editor.component.scss'
})
export class TextEditorComponent implements ControlValueAccessor, OnInit, OnDestroy {
  @Input() placeholder: string = '';
  @Output() valueChangeHtml = new EventEmitter<string>();

  html = '';
  editor!: Editor;

  ngOnInit(): void {
    this.editor = new Editor()
  }

  ngOnDestroy(): void {
    this.editor.destroy()
  }

  private onChange = (_: any) => { };
  private onTouched = () => { };

  writeValue(value: string): void {
    this.html = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }

  onInput(value: string): void {
    this.html = value;
    this.onChange(value);
    this.valueChangeHtml.emit(value);
  }
}
