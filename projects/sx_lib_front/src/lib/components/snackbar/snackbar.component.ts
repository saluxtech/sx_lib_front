import { NgClass } from '@angular/common';
import { Component, Inject, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';
import { SnackbarType } from '../../enums/snackbar-type.enum';
import { TextComponent } from '../text/text.component';
import { SnackbarData } from '../../models/snackbar/snackbar-data.model';

@Component({
  selector: 'sx-snackbar',
  standalone: true,
  imports: [NgClass, MatIconModule, TextComponent],
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent {
  protected readonly SnackbarType = SnackbarType;
  protected readonly type = signal<SnackbarType | undefined>(undefined);

  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: SnackbarData,
    private snackBarRef: MatSnackBarRef<SnackbarComponent>
  ) {
    this.type.set(data.type);
  }

  close() {
    this.snackBarRef.dismiss();
  }
}
