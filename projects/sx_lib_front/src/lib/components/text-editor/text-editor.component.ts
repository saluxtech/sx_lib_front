import { Component, EventEmitter, forwardRef, Input, OnDestroy, OnInit, Output } from '@angular/core';
import {
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { Editor, NgxEditorModule, Toolbar } from 'ngx-editor';


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
  @Input() placeholder = '';
  @Output() valueChangeHtml = new EventEmitter<string>();
  editor!: Editor;
  toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['link', 'image'],
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
  ]; 

  html = '';

  ngOnInit(): void {
    this.editor = new Editor();
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
