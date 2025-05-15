import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'sx-accordion',
  templateUrl: 'accordion.component.html',
  styleUrls: ['accordion.component.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [
    NgbAccordionModule,
  ]
})
export class AccordionComponent implements OnInit {
  @Input() title = 'Header text';
  @Input() colorTitle = '#000';
  @Input() subtitle = 'Subtitle text';
  @Input() colorSubtitle = '#000';

  @Input() titleB = '';
  @Input() colorTitleB = '';
  @Input() subtitleB = '';
  @Input() colorSubtitleB = '';

  @Input() pathIcon = '';
  @Input() pathFillIcon = '';
  @Input() viewBoxIcon = '';

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
