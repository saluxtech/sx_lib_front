import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BadgesComponent, IconSvgModule } from "sx";

@NgModule({
  declarations: [ BadgesComponent ],
  imports: [CommonModule, IconSvgModule],
  exports: [ BadgesComponent ],
})
export class BadgesModule {}
