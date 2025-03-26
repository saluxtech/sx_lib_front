import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'accessObject',
})
export class AccessObjectPipe implements PipeTransform {
  transform(object: any, objectPath: string) {
    return objectPath?.includes('.')
      ? objectPath
          .split('.')
          .reduce((prev, curr) => (prev ? prev[curr] : null), object || self)
      : object[objectPath];
  }
}
