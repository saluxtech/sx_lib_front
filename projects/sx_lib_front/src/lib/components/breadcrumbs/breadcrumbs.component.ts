import { Component, Input } from '@angular/core';
import { IconsEnum } from '../../enums/icons.enum';
import { RouterLink } from '@angular/router';
import { TextComponent } from '../text';
import { Breadcrumbs } from '../../models/breadcrumbs.model';

@Component({
  selector: 'sx-breadcrumbs',
  imports: [RouterLink, TextComponent],
  templateUrl: './breadcrumbs.component.html',
  styleUrl: './breadcrumbs.component.scss'
})
export class BreadcrumbsComponent {
  @Input() breadcrumbs: Breadcrumbs[] = [];
  protected readonly IconsEnum = IconsEnum;
}
