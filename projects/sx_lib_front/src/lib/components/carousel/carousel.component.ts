import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { CarouselItem } from './carousel.type';

@Component({
  selector: 'sx-carousel',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit, OnDestroy {
  @Input() carouselItems: CarouselItem[] = [];
  @Input() interval = 15000;

  currentIndex = 0;
  private timer!: ReturnType<typeof setTimeout>;

  private cdr = inject(ChangeDetectorRef);

  ngOnInit(): void {
    this.startSlider();
  }

  ngOnDestroy(): void {
    this.clearTimer();
  }

  selectItem(index: number) {
    this.currentIndex = index;
  }

  prevSlide() {
    this.currentIndex =
      this.currentIndex > 0
        ? this.currentIndex - 1
        : this.carouselItems.length - 1;
  }

  nextSlide() {
    this.currentIndex =
      this.currentIndex < this.carouselItems.length - 1
        ? this.currentIndex + 1
        : 0;
  }

  private startSlider(): void {
    this.timer = setInterval(() => {
      this.nextSlide();
      this.cdr.markForCheck();
    }, this.interval);
  }

  private clearTimer(): void {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
}
