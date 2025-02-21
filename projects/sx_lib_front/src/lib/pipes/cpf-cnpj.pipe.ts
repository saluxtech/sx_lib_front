import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'cpfCnpj',
    standalone: false
})
export class cpfCnpjPipe implements PipeTransform {
    transform(value: string | string[]): string {
        if (!value) return '';
        if (typeof value == 'number' || typeof value == 'string') {
            return cpfCnpjString(value);
        }
        if (typeof value == 'object') return cpfCnpjList(value);
        return '';
    }
}

export function cpfCnpjString(value: string): string {
    if (!value) return '';
    if (typeof value == 'number') {
        value = String(value);
    }
    value = value.replace(/\D/g, '');
    if (value.length === 11) { // CPF
        return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    } else if (value.length === 14) { // CNPJ
        return value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
    } else {
        return value;
    }
}

export function cpfCnpjList(valueList: string[]): string {
    if (!valueList.length) return '';
    const valueListFormatted =  valueList.map(value => {
        return cpfCnpjString(value);
    });
    return valueListFormatted.join(', ');
}
