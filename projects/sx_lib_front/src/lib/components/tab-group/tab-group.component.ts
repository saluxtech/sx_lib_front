import {
  Component,
  ElementRef,
  EventEmitter,
  inject,
  Input,
  Output,
  Renderer2,
} from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { CommonModule } from '@angular/common';
import { IconSvgComponent, Tab, TextComponent } from 'sx_lib_front';


@Component({
  selector: 'sx-tab-group',
  templateUrl: './tab-group.component.html',
  styleUrls: ['./tab-group.component.scss'],
  imports: [CommonModule, TextComponent, MatTabsModule, IconSvgComponent],
  providers: []
})
export class TabGroupComponent {
  
  private renderer = inject(Renderer2);
  private el = inject(ElementRef);

  @Input() tabs: Tab[] = [];
  @Output() changeIndex: EventEmitter<number> = new EventEmitter<number>();

  selectedIndex: number = 0;
  isIconHiden: boolean = false;

  ngAfterViewInit(): void {
    this.varySizeLabelStyle();
  }

  changeIndexMethod(index: number) {
    this.selectedIndex = index;
    this.changeIndex.emit(index);
  }

  varySizeLabelStyle(): void {
    const valuePerPixel: number = 5;

    const matTabLabels =
      this.el.nativeElement.querySelectorAll('.mat-tab-label');

    if (matTabLabels && matTabLabels.length > 0) {
      matTabLabels.forEach((label: HTMLElement, index: number) => {
        let maxWidth: number = this.tabs[index].label.length * valuePerPixel;
        let maxWidthPixel: string = maxWidth.toString() + 'px';

        this.renderer.setStyle(label, 'maxWidth', maxWidthPixel);
      });
    }
  }
}
