import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
  // pure: false
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    const array = value.trim().split(' '); // hello how are you 
    const ellipsis = array.length > 3 ? '...' : '';
   console.log('we are in impure pipe')
    return array.slice(0, 3).join(' ') + ellipsis;
  }

}
