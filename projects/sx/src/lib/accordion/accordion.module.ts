import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { AccordionComponent, BasicCardModule, IconSvgModule } from 'sx';

@NgModule({
  imports: [
    CommonModule,
    NgbAccordionModule,
    BasicCardModule,
    IconSvgModule,
  ],
  exports: [AccordionComponent],
  declarations: [AccordionComponent],
})
export class SxAccordionModule {}
