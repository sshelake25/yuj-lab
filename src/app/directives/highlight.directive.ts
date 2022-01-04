import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[yujHighlight]'
})
export class HighlightDirective {

  @Input() yujHighlight: string = '';

  constructor(private myelem: ElementRef) {
    // myelem.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.highlight(this.yujHighlight, '30px');
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
