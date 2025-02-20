import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { AccordionComponent } from './accordion.component';
import { BasicCardModule } from '../basic-card/basic-card.module';
import { IconSvgModule } from '../icon-svg/icon-svg.module';

@NgModule({
  declarations: [AccordionComponent],
  imports: [
    CommonModule,
    NgbAccordionModule,
    BasicCardModule,
    IconSvgModule,
  ],
  exports: [AccordionComponent],
})
export class AccordionModule {}
