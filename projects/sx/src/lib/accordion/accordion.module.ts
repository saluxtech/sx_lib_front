import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

import { IconSvgModule } from '../icon-svg/icon-svg.module';
import { AccordionComponent } from './accordion.component';
import { BasicCardModule } from '../basic-card/basic-card.module';

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
