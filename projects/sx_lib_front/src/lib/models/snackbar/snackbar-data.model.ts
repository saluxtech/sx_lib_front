import { SnackbarType } from "../../enums/snackbar-type.enum";

export interface SnackbarData {
    title: string;
    action: string;
    icon?: string;
    content?: string;
    type?: SnackbarType;
  }