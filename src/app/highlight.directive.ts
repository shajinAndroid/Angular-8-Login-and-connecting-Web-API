import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  elr: ElementRef;

  @Input() appHighlight = '';

  constructor(el: ElementRef) {
this.elr=el;
 }

 @HostListener('mouseenter') onMouseEnter() {
  this.highlight(this.appHighlight);
}

@HostListener('mouseleave') onMouseLeave() {
  this.highlight('');
}

private highlight(color: string) {
  this.elr.nativeElement.style.backgroundColor = color;
}

}
