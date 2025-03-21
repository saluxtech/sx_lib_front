import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  Input,
  OnInit,
  signal,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { GridSizesPx } from './../../models/grid.model';
import { SideMenuItem } from './../../models/side-menu.model';


@Component({
  selector: 'sx-side-menu',
  imports: [RouterModule],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideMenuComponent implements OnInit {
  @Input({ required: true }) menuItems: SideMenuItem[] | null = [];
  protected isMenuClosed = signal(false);

  @HostListener('window:resize', ['$event'])
  protected onResize(): void {
    this.checkScreenSize();
  }

  ngOnInit(): void {
    this.checkScreenSize();
  }

  private checkScreenSize(): void {
    const screenWidth = window.innerWidth;
    if (screenWidth < GridSizesPx.Small && !this.isMenuClosed()) {
      this.toggleMenu();
    }
  }

  protected toggleMenu(): void {
    this.isMenuClosed.set(!this.isMenuClosed());
  }
}
