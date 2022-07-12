import { Directive,ElementRef } from '@angular/core';
import { HostListener } from '@angular/core';

@Directive({
  selector: '[appInvert]'
})
export class InvertDirective {

  constructor(private el:ElementRef) { }

  @HostListener('mouseover') onhoverin() {
    this.el.nativeElement.style.backgroundColor = 'white';
    this.el.nativeElement.style.color = '#E91E63';
  }
  @HostListener('mouseout') onhoverout() {
    this.el.nativeElement.style.backgroundColor = '#E91E63';
    this.el.nativeElement.style.color = 'white';
  }

}
