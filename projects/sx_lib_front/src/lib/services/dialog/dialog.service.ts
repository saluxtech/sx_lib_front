import { inject, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { IDialog } from '../../models/dialog/dialog.interface';
import { DialogComponent } from '../../components/dialog/dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  private readonly dialog = inject(MatDialog);

  openDialog(data: IDialog): Observable<any> {
    return this.dialog.open(DialogComponent, {
      data
    }).afterClosed();
  }
}