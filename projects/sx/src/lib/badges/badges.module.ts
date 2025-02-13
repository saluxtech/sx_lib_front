import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IconSvgModule } from "../icon-svg/icon-svg.module";
import { BadgesComponent } from './badges.component';

@NgModule({
  declarations: [ BadgesComponent ],
  imports: [CommonModule, IconSvgModule],
  exports: [ BadgesComponent ],
})
export class BadgesModule {}
