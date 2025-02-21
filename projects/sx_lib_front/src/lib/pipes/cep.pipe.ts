import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'cep',
    standalone: false
})
export class CepPipe implements PipeTransform {
    transform(value: string): string {
        if (value && value.length === 8) {
            return `${value.substring(0, 5)}-${value.substring(5)}`;
        }
        return value;
    }
}
