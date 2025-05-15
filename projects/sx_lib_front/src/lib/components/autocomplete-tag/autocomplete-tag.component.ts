import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  forwardRef,
  inject,
  Input,
  NO_ERRORS_SCHEMA,
  OnInit,
  Output,
  TemplateRef,
  ViewChild,
  ViewEncapsulation, AfterViewInit
} from '@angular/core';
import {
  ControlContainer,
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
  Validators
} from '@angular/forms';
import {
  NgbTypeahead,
  NgbTypeaheadSelectItemEvent
} from '@ng-bootstrap/ng-bootstrap';
import { merge, Observable, of, Subject } from 'rxjs';
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  map,
  switchMap,
  tap
} from 'rxjs/operators';
import { ViewModel } from '../display-value/view.model';
import { NgFor, NgIf } from '@angular/common';

interface AutoCompleteOptions {
  CODIGO: string;
  DESCRICAO: string;
}

interface ResultTemplateContext {
	result: any;

	term: string;

	formatter: (result: any) => string;
}

@Component({
  selector: 'sx-autocomplete-tag',
  templateUrl: './autocomplete-tag.component.html',
  styleUrls: ['./autocomplete-tag.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AutocompleteTagComponent),
      multi: true
    }
  ],
  schemas: [NO_ERRORS_SCHEMA],
  imports: [NgFor, NgIf, NgbTypeahead]
})
export class AutocompleteTagComponent implements ControlValueAccessor, OnInit, AfterViewInit {
  formater = (result: any): string => {
    return this.options?.find(item => item?.CODIGO?.trim() == result)?.DESCRICAO || result;
  }
  @Output() onSelectItem = new EventEmitter<any>();
  @Output() onRemoveTag = new EventEmitter<{item: string, index: number}>();
  @Input() searchFunction!: (term: string) => Observable<any[]>;
  @Input() label = 'Selecione';
  @Input() placeholder = '';
  @Input() editable = false;
  @Input() theme: 'light' | 'dark' = 'light';
  @Input() inputFormatter: (item: any) => string = this.formater;
  @Input() resultFormatter: (item: any) => string = this.formater;
  @Input() formControlName = 'defaultFormControlName';
  @Input() resultTemplate!: TemplateRef<ResultTemplateContext>;
  @Input() options!: AutoCompleteOptions[];
  @Input() tagList!: string[];

  @ViewChild('inputField') inputField!: ElementRef;
  searching = false;
  private selectedItem = false;

  viewLabel: ViewModel = { label: '', type: 'text' };

  @ViewChild('instance', { static: true }) instance!: NgbTypeahead;
  focus$ = new Subject<string>();
  click$ = new Subject<string>();
  onChange: any = () => {};
  onTouch: any = () => {};

  controlContainer = inject(ControlContainer) as any;
  validators = Validators;
  control: FormControl = new FormControl();
  value!: string;

  constructor(private rf: ChangeDetectorRef) {}

  isListEmpty = false
  ngOnInit(): void {
    this.setControlFromOutside();

    this.focus$.next('');
    this.click$.next('');
  }

  setControlFromOutside() {
    const parentControl =
      this.controlContainer.control &&
      this.controlContainer.control.get(this.formControlName);
    if (parentControl) {
      this.control = this.controlContainer.control.get(
        this.formControlName
      ) as FormControl;
    }
  }

  search = (text$: Observable<string>) => {
    const focusAndClick$ = merge(this.focus$, this.click$);
    return merge(text$, focusAndClick$).pipe(
      debounceTime(200),
      distinctUntilChanged(),
      switchMap(term => {
        if (this.selectedItem) {
          this.selectedItem = false;
          return of([]);
        }
        this.searching = true;
        return this.searchFunction(term).pipe(
          tap((data) => {
            this.options = data;
          }),
          map(data => data.map(item => item?.CODIGO?.trim() || item)),
          catchError(() => {
            return of([]);
          }),
          tap(() => (this.searching = false))
        );
      })
    );
  };

  ngAfterViewInit(): void {

    this.focus$.next('');
    this.click$.next('');
  }

  selectItem(event: NgbTypeaheadSelectItemEvent) {
    this.onSelectItem.emit(event);

    if (this.inputField && this.inputField.nativeElement) {
      this.inputField.nativeElement.blur();
    }

    this.selectedItem = true;
    this.instance.dismissPopup();
  }

  onClick($event: any) {
    if (!this.searching) {
      this.click$.next($event.target.value || '');
    }
  }

  onFocus($event: any) {
    if (!this.searching) {
      this.focus$.next($event.target.value || '');
    }
  }

  writeValue(value: any): void {
    if (value !== this.value) {
      this.value = value;
      this.onChange(this.value);
      this.onTouch();
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState?(isDisabled: boolean): void {}

  removerItemLista(item: string, index: number){
    this.onRemoveTag.emit({item, index})
  }
}
