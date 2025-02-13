import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ButtonLinkComponent } from "./button-link.component";
import { IconSvgModule } from "../icon-svg/icon-svg.module";

@NgModule({
  declarations: [ButtonLinkComponent],
  imports: [CommonModule, IconSvgModule],
  exports: [ButtonLinkComponent],
})
export class ButtonLinkModule {}
