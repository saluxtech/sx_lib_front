import { SnackbarPosition } from "../../enums/snackbar-position.enum";

export interface SnackbarPositionInterface {
    horizontalPosition: 'start' | 'center' | 'end';
    verticalPosition: 'top' | 'bottom';
}

export const SnackbarPositions: Record<SnackbarPosition, SnackbarPositionInterface> = {
    [SnackbarPosition.TOP_LEFT]: { horizontalPosition: 'start' as const, verticalPosition: 'top' as const },
    [SnackbarPosition.TOP_CENTER]: { horizontalPosition: 'center' as const, verticalPosition: 'top' as const },
    [SnackbarPosition.TOP_RIGHT]: { horizontalPosition: 'end' as const, verticalPosition: 'top' as const },
    [SnackbarPosition.BOTTOM_LEFT]: { horizontalPosition: 'start' as const, verticalPosition: 'bottom' as const },
    [SnackbarPosition.BOTTOM_CENTER]: { horizontalPosition: 'center' as const, verticalPosition: 'bottom' as const },
    [SnackbarPosition.BOTTOM_RIGHT]: { horizontalPosition: 'end' as const, verticalPosition: 'bottom' as const },
    [SnackbarPosition.CENTER_LEFT]: { horizontalPosition: 'start' as const, verticalPosition: 'bottom' as const },
    [SnackbarPosition.CENTER]: { horizontalPosition: 'center' as const, verticalPosition: 'bottom' as const },
    [SnackbarPosition.CENTER_RIGHT]: { horizontalPosition: 'end' as const, verticalPosition: 'bottom' as const }
};
