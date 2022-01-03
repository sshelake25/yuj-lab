import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[yujHighlight]'
})
export class HighlightDirective {

  constructor(myelem : ElementRef) {
    myelem.nativeElement.style.backgroundColor = 'yellow';
    myelem.nativeElement.style.fontSize = '30px';
  }


}
