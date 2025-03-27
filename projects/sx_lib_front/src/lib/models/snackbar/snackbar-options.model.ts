import { SnackbarPosition } from "../../enums/snackbar-position.enum";
import { SnackbarType } from "../../enums/snackbar-type.enum";

export interface SnackbarOptionsInterface {
    action?: string;
    position?: SnackbarPosition;
    type?: SnackbarType;
    icon?: string;
    title?: string;
    content?: string;
} 