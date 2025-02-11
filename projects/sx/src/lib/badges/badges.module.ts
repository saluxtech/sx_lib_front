import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BadgesComponent } from "./badges.component";
import { IconSvgModule } from "../icon-svg/icon-svg.module";

@NgModule({
  declarations: [ BadgesComponent ],
  imports: [CommonModule, IconSvgModule],
  exports: [ BadgesComponent ],
})
export class BadgesModule {}
