import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'avatar'
})
export class AvatarPipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    let image = "";
    if (value) {
      image = value;
    } else {
      image = args[0];
    }
    console.log('insde pure piple - avatar')
    return image;
  }

}
