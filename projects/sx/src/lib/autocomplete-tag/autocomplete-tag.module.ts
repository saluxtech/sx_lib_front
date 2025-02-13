import { forwardRef, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { AutocompleteTagComponent } from './autocomplete-tag.component';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { IconSvgModule } from "../icon-svg/icon-svg.module";
import { TextModule } from "../text/text.module";
import { DisplayValueModule } from "../display-value/display-value.module";
import { LoaderModule } from "../loader/loader.module";
import { TagModule } from "../tag/tag.module";

@NgModule({
  declarations: [
    AutocompleteTagComponent
  ],
  schemas: [NO_ERRORS_SCHEMA],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbTypeaheadModule,
    IconSvgModule,
    TextModule,
    LoaderModule,
    DisplayValueModule,
    TagModule
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AutocompleteTagComponent),
      multi: true
    }
  ],
  exports: [
    AutocompleteTagComponent
  ]
})
export class AutocompleteTagModule { }
