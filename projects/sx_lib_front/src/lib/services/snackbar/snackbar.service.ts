import { inject, Injectable } from "@angular/core";
import { MatSnackBar, MatSnackBarConfig } from "@angular/material/snack-bar";
import { DuracaoEnum } from "../../enums/duracao.enum";
import { SnackbarPosition } from "../../enums/snackbar-position.enum";
import { SnackbarType } from "../../enums/snackbar-type.enum";
import { SnackbarPositionInterface, SnackbarPositions } from "../../models/snackbar/snackbar-position.model";
import { SnackbarOptionsInterface } from "../../models/snackbar/snackbar-options.model";
import { SnackbarComponent } from "../../components/snackbar/snackbar.component";
import { IconsEnum } from "../../enums/icons.enum";

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

    public openDefaultError(title: string, content?: string) {
        this.open({
            icon: IconsEnum.CIRCLE_ERROR,
            title,
            content,
            type: SnackbarType.ERROR,
            action: IconsEnum.CLOSE
        });
    }

    public openDefaultSuccess(title: string, content?: string) {
        this.open({
            icon: IconsEnum.CIRCLE_CHECK,
            title,
            content,
            type: SnackbarType.SUCCESS,
            action: IconsEnum.CLOSE
        });
    }

    public openDefaultWarn(title: string, content?: string) {
        this.open({
            icon: IconsEnum.TRIANGLE_EXCLAMATION,
            title,
            content,
            type: SnackbarType.WARN,
            action: IconsEnum.CLOSE
        });
    }

    public openDefaultInfo(title: string, content?: string) {
        this.open({
            icon: IconsEnum.CIRCLE_INFO,
            title,
            content,
            type: SnackbarType.INFO,
            action: IconsEnum.CLOSE
        });
    }

    private getConfig(position?: SnackbarPosition, type: SnackbarType = SnackbarType.DEFAULT): MatSnackBarConfig {
        return {
            duration: 999999999,
            ...this.getPosition(position)
        };
    }

    private getPosition(position: SnackbarPosition = SnackbarPosition.CENTER): SnackbarPositionInterface {
        return SnackbarPositions[position];
    }
}