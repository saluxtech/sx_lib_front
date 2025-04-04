import { Component, inject } from '@angular/core';
import { HeaderButtonsService } from '../../services/shared-buttons/shared-buttons.service';
import { HeaderButtons } from '../../enums/header-buttons.enum';
import { ButtonComponent } from '../button/button.component';
import { ButtonList } from '../../models';
import { IconsEnum } from '../../enums/icons.enum';

@Component({
  selector: 'sx-header-buttons',
  imports: [ButtonComponent],
  templateUrl: './header-buttons.component.html',
  styleUrl: './header-buttons.component.scss'
})
export class HeaderButtonsComponent {
  private headerButtonsService = inject(HeaderButtonsService);
  protected buttons: ButtonList[] = [
    {
      icon: IconsEnum.EDIT,
      event: HeaderButtons.EDIT,
    },
    {
      icon: IconsEnum.DELETE,
      event: HeaderButtons.DELETE,
    },
    {
      icon: IconsEnum.ADD,
      event: HeaderButtons.ADD,
    },
    {
      icon: IconsEnum.CLOSE,
      event: HeaderButtons.CLOSE,
    },
    {
      icon: IconsEnum.SAVE,
      event: HeaderButtons.SAVE,
    }
  ]


  protected handleClick(button: HeaderButtons) {
    this.headerButtonsService.emit(button);
  }
}
