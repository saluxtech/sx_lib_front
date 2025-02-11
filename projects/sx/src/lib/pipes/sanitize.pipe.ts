import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Pipe({
  name: 'sanitizeUrl',
  standalone: true
})
export class SanitizeUrlPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {}

  transform(value: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(value);
  }
}
