import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayValueModule } from '../display-value/display-value.module';
import { ViewListComponent } from './view-list.component';

@NgModule({
    declarations: [
        ViewListComponent,
    ],
    imports: [
        CommonModule,
        DisplayValueModule,
    ],
    exports: [
        ViewListComponent,
    ]
})
export class ViewListModule { }
