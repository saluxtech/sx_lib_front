import { ChangeDetectionStrategy, Component, Input, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'sx-side-menu',
  imports: [RouterModule],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideMenuComponent {
  @Input({ required: true }) menuItems: any[] = [];
  protected isMenuClosed = signal(false);

  protected toggleMenu(): void {
    this.isMenuClosed.set(!this.isMenuClosed());
  }
}
