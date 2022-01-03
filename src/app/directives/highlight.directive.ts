import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[yujHighlight]'
})
export class HighlightDirective {

  constructor(private myelem: ElementRef) {
    // myelem.nativeElement.style.backgroundColor = 'yellow';

  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.highlight('yellow', '30px');
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.highlight('', '12px');
  }

  private highlight(color: string, fontSize: string) {
    this.myelem.nativeElement.style.backgroundColor = color;
    this.myelem.nativeElement.style.fontSize = fontSize;
  }

}
