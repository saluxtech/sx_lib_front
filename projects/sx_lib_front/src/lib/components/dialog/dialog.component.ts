import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { IDialog } from '../../models/dialog/dialog.interface';
import { ButtonComponent } from '../button/button.component';
import { TextComponent } from "../text/text.component";

@Component({
  selector: 'sx-dialog',
  imports: [MatDialogModule, ButtonComponent, TextComponent],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})
export class DialogComponent {
  data: IDialog = inject(MAT_DIALOG_DATA);
}
