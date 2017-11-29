import { Directive, ElementRef,HostListener } from '@angular/core';


@Directive({
  selector: '[appHighlight]'
})

export class HighlightDirective {
  
  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = null;
  }

 
  constructor(private el: ElementRef) { 
    // el.nativeElement.style.backgroundColor = 'yellow';
  }
}
