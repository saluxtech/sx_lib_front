import { HttpErrorResponse } from "@angular/common/http";
import { throwError } from "rxjs";
import { FormControl } from "@angular/forms";
import { IDataFormatada } from "sx_lib_front";

export class Utils {
  static calcularIdade (dataNascimento: Date): IDataFormatada {
    const hoje = new Date();
    const diff = hoje.getTime() - dataNascimento.getTime();
  
    const diffDias = Math.floor(diff / (1000 * 60 * 60 * 24));
  
    const anos = Math.floor(diffDias / 365);
    const meses = Math.floor((diffDias % 365) / 30);
    const dias = (diffDias % 365) % 30;
  
    return { anos, meses, dias };
  };

  static handleErrorMessage(err: HttpErrorResponse) {
    return throwError(
      () =>
        err?.error?.message ||
        'Desculpe, ocorreu um erro. Tente novamente mais tarde.',
    );
  }

  static updateIdade(formControl: FormControl): string {
    if (formControl?.valid) {
      const idade = Utils.calcularIdade(new Date(formControl.value));
  
      const anoText = idade.anos > 1 ? `${idade.anos} anos` : `${idade.anos} ano`;
      const mesesText =
        idade.meses > 1 ? `${idade.meses} meses` : `${idade.meses} mês`;
      const diasText = idade.dias > 1 ? `${idade.dias} dias` : `${idade.dias} dia`;
  
      return `${anoText}, ${mesesText} e ${diasText}.`;
    }
    return '-';
  }
}
