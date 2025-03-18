import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { CarouselItem } from './carousel.type';

@Component({
  selector: 'sx-carousel',
  standalone: true,
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  @Input() carouselItems: CarouselItem[] = [];

  currentIndex = 0;

  constructor() {}

  ngOnInit(): void {}

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
}
