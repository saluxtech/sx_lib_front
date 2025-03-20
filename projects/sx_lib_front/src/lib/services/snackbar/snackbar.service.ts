import { inject, Injectable } from "@angular/core";
import {  MatSnackBar } from "@angular/material/snack-bar";
import { DuracaoEnum } from "../../enums/duracao.enum";

@Injectable({
    providedIn: 'root'
})
export class SnackbarService {
    private snackbar = inject(MatSnackBar);
    
    constructor() {}

    public open(message: string, action: string) {
        this.snackbar.open(message, action, {
            duration: DuracaoEnum.TEMPO_SNACKBAR
        });
    }
}