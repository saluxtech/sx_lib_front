import { forwardRef, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';
import { FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { AutocompleteComponent } from './autocomplete.component';
import { IconSvgModule } from "../icon-svg/icon-svg.module";
import { TextModule } from "../text/text.module";
import { LoaderModule } from '../loader/loader.module';
import { DisplayValueModule } from "../display-value/display-value.module";

@NgModule({
  declarations: [
    AutocompleteComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    JsonPipe,
    ReactiveFormsModule,
    NgbTypeaheadModule,
    IconSvgModule,
    TextModule,
    LoaderModule,
    DisplayValueModule
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AutocompleteComponent),
      multi: true
    }
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  exports: [ AutocompleteComponent ],
})
export class AutoCompleteModule { }
