import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'dateInput', standalone: false })
export class DateInputPipe implements PipeTransform {
  transform(value: string): any {
    if (value?.length != 8) return '';
    const day = value.substring(0, 2);
    const month = value.substring(2, 4);
    const year = value.substring(4, 8);
    return `${day}/${month}/${year}`;
  }
}
