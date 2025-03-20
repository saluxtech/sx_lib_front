import { inject, Injectable } from "@angular/core";
import {  MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
    providedIn: 'root'
})
export class SnackbarService {
    private snackbar = inject(MatSnackBar);
    
    constructor() {}

    public open(message: string, action: string) {
        this.snackbar.open(message, action, {
            duration: 3000
        });
    }
}