import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tolowercasepipe',
  standalone: true
})
export class TolowercasePipe implements PipeTransform {

  transform(value2: string, ...args: string[]): string {
    return value2.toLowerCase();
  }

}
