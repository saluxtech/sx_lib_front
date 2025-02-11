import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayValueModule, ViewListComponent } from 'sx';

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
