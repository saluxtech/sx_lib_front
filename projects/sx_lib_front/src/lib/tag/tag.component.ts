import { Component, EventEmitter, Input, Output } from '@angular/core';

type typeTagSiz = 'sm' | 'md' | 'lg' | ''
@Component({
  selector: 'sx-tag',
  templateUrl: './sx-tag.component.html',
  styleUrls: ['./sx-tag.component.scss'],
  standalone: false
})
export class TagComponent {
  @Input() label: string = '';
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
