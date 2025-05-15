import {
  Component,
  ElementRef,
  EventEmitter,
  inject,
  Input,
  Output,
  Renderer2, AfterViewInit,
} from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { CommonModule } from '@angular/common';
import { TextComponent } from '../text/text.component';
import { IconSvgComponent } from '../icon-svg/icon-svg.component';
import { Tab } from '../../models/tab-group.interface';


@Component({
  selector: 'sx-tab-group',
  templateUrl: './tab-group.component.html',
  styleUrls: ['./tab-group.component.scss'],
  imports: [CommonModule, TextComponent, MatTabsModule, IconSvgComponent],
  providers: []
})
export class TabGroupComponent implements AfterViewInit {
  
  private renderer = inject(Renderer2);
  private el = inject(ElementRef);

  @Input() tabs: Tab[] = [];
  @Output() changeIndex: EventEmitter<number> = new EventEmitter<number>();

  selectedIndex = 0;
  isIconHiden = false;

  ngAfterViewInit(): void {
    this.varySizeLabelStyle();
  }

  changeIndexMethod(index: number) {
    this.selectedIndex = index;
    this.changeIndex.emit(index);
  }

  varySizeLabelStyle(): void {
    const valuePerPixel = 5;

    const matTabLabels =
      this.el.nativeElement.querySelectorAll('.mat-tab-label');

    if (matTabLabels && matTabLabels.length > 0) {
      matTabLabels.forEach((label: HTMLElement, index: number) => {
        const maxWidth: number = this.tabs[index].label.length * valuePerPixel;
        const maxWidthPixel: string = maxWidth.toString() + 'px';

        this.renderer.setStyle(label, 'maxWidth', maxWidthPixel);
      });
    }
  }
}
