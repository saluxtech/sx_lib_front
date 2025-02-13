import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output,
  TemplateRef,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {
  ControlContainer,
  ControlValueAccessor,
  FormControl,
  ValidatorFn,
  Validators
} from '@angular/forms';
import {
  NgbTypeahead,
  NgbTypeaheadSelectItemEvent
} from '@ng-bootstrap/ng-bootstrap';
import { merge, Observable, of, OperatorFunction, Subject } from 'rxjs';
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  map,
  switchMap,
  tap
} from 'rxjs/operators';
import { ViewModel } from '../display-value/model/view.model';

interface ResultTemplateContext {
	result: any;

	term: string;

	formatter: (result: any) => string;
}

interface AutoCompleteOptions {
  CODIGO: string;
  DESCRICAO: string;
  CODIGO_DESCRICAO: string;
}

@Component({
  selector: 'sx-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: false,
})
export class AutocompleteComponent implements ControlValueAccessor, OnInit {
  formater = (result: string): string => {
    if(!this.IsCodeDescription){
      return this.options?.find((item: any) => item?.CODIGO?.trim() == result)?.DESCRICAO || result;
    }else{
      return this.options?.find((item: any) => item?.CODIGO?.trim() == result)?.CODIGO_DESCRICAO || result;
    }    
  }
  @Output() onSelectItem = new EventEmitter<any>();
  @Input() searchFunction: ((term: string) => Observable<any[]>) | any;
  @Input() label: string = 'Selecione';
  @Input() placeholder: string = '';
  @Input() editable: boolean = false;
  @Input() theme: 'light' | 'dark' = 'light';
  @Input() inputFormatter: (item: any) => string = this.formater;
  @Input() resultFormatter: (item: any) => string = this.formater;
  @Input() formControlName: string = 'defaultFormControlName';
  @Input() resultTemplate: TemplateRef<ResultTemplateContext> | any;
  @Input() options: AutoCompleteOptions[] | any;
  @Input() isLupa: boolean = false
  @Input() IsCodeDescription: boolean = false;
  @Input() limitOfCharactersToSearch: number = 2;

  @ViewChild('inputField') inputField: ElementRef | any;
  searching = false;
  private selectedItem = false;

  viewLabel: ViewModel = { label: '', type: 'text' };

  @ViewChild('instance', { static: true }) instance: NgbTypeahead | any;
  focus$ = new Subject<string>();
  click$ = new Subject<string>();
  onChange: any = () => {};
  onTouch: any = () => {};

  controlContainer = inject(ControlContainer) as any;
  validators: any = Validators;
  control: FormControl = new FormControl();
  value: string | any;

  constructor(private rf: ChangeDetectorRef) {}

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

  // OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
	// 	text$.pipe(
	// 		debounceTime(200),
	// 		distinctUntilChanged(),
	// 		map((term) =>
	// 			term.length < 2 ? [] : states.filter((v) => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10),
	// 		),
	// 	);

  search(text$: Observable<string>): Observable<any> {
    const focusAndClick$ = merge(this.focus$, this.click$);
    return merge(text$, focusAndClick$).pipe(
      debounceTime(200),
      distinctUntilChanged(),
      switchMap(term => {
        if (this.selectedItem) {
          this.selectedItem = false;
          return of([]);
        }

        if(term.length <= this.limitOfCharactersToSearch){
          this.selectedItem = false;
          return of([])
        }

        this.searching = true;
        return this.searchFunction(term).pipe(
          tap((data) => {
            this.options = data;
          }),
          map((data: any) => data.map((item: any) => item?.CODIGO?.trim() || item)),
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
}
