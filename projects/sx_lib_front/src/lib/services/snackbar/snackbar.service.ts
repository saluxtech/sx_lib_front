import { inject, Injectable } from "@angular/core";
import { MatSnackBar, MatSnackBarConfig } from "@angular/material/snack-bar";
import { DuracaoEnum } from "../../enums/duracao.enum";
import { SnackbarPosition } from "../../enums/snackbar-position.enum";
import { SnackbarType } from "../../enums/snackbar-type.enum";
import { SnackbarPositionInterface, SnackbarPositions } from "../../models/snackbar/snackbar-position.model";
import { SnackbarOptionsInterface } from "../../models/snackbar/snackbar-options.model";
import { SnackbarComponent } from "../../components/snackbar/snackbar.component";

@Injectable({
    providedIn: 'root'
})
export class SnackbarService {
    private snackbar = inject(MatSnackBar);
    
    public open({
        action = 'Fechar',
        position,
        type = SnackbarType.DEFAULT,
        icon,
        title,
        content
    }: SnackbarOptionsInterface = {}) {
        this.snackbar.openFromComponent(SnackbarComponent, {
            ...this.getConfig(position, type),
            data: {
                title,
                content,
                action,
                type,
                icon
            }
        });
    }

    private getConfig(position?: SnackbarPosition, type: SnackbarType = SnackbarType.DEFAULT): MatSnackBarConfig {
        return {
            duration: DuracaoEnum.TEMPO_SNACKBAR,
            ...this.getPosition(position)
        };
    }

    private getPosition(position: SnackbarPosition = SnackbarPosition.CENTER): SnackbarPositionInterface {
        return SnackbarPositions[position];
    }
}