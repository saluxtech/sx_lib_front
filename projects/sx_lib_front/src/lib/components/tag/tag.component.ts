import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TextComponent } from '../text/text.component';
import { IconSvgComponent } from '../icon-svg/icon-svg.component';

type typeTagSiz = 'sm' | 'md' | 'lg' | ''
@Component({
  selector: 'sx-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss'],
  imports: [TextComponent, IconSvgComponent]
})
export class TagComponent {
  @Input() label = '';
  @Input() tagSize: typeTagSiz = '';
  @Output() onSelectTag: EventEmitter<void> = new EventEmitter<void>();
  svgFill = '#50688C';

  public changeSvgFillColor(color: string): void {
    this.svgFill = color;
  }

  selectTag() {
    this.onSelectTag.emit();
  }
}
