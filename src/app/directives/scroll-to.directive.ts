import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[yujScrollTo]'
})
export class ScrollToDirective {
  constructor() { }

  @Input() target = '';

  @HostListener('dblclick')
  myClickHere() {
    const targetElement = document.querySelector(this.target);
    targetElement.scrollIntoView({ behavior: 'smooth' });
  }


}
