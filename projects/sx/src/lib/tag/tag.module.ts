import { NgModule } from '@angular/core';
import { IconSvgModule } from "../icon-svg/icon-svg.module";
import { TextModule } from "../text/text.module";
import { TagComponent } from './tag.component';

@NgModule({
  declarations: [
    TagComponent
  ],
  imports: [IconSvgModule, TextModule],
  exports: [
    TagComponent
  ]
})
export class TagModule { }
