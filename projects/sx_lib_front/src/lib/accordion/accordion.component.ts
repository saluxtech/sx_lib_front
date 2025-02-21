import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'sx-accordion',
  templateUrl: 'accordion.component.html',
  styleUrls: ['accordion.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: false
})
export class AccordionComponent implements OnInit {
  @Input() title: string = 'Header text';
  @Input() colorTitle: string = '#000';
  @Input() subtitle: string = 'Subtitle text';
  @Input() colorSubtitle: string = '#000';

  @Input() titleB: string = '';
  @Input() colorTitleB: string = '';
  @Input() subtitleB: string = '';
  @Input() colorSubtitleB: string = '';

  @Input() pathIcon: string = '';
  @Input() pathFillIcon: string = '';
  @Input() viewBoxIcon: string = '';

  @Input() sizeTitle: 'normal' | 'small' = 'normal';

  @Output()
  onclick = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  stopPropagation($event: Event): void {
    $event.stopPropagation();
    this.onclick.emit();
  }
}
