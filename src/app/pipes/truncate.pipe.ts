import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    const array = value.trim().split(' ');
    const ellipsis = array.length > 3 ? '...' : '';

    return array.slice(0, 3).join(' ') + ellipsis;
  }

}
