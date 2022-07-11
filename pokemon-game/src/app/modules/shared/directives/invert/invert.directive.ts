import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appInvert]'
})
export class InvertDirective{

  constructor(private el:ElementRef) { }

  @HostListener('mouseover') onhoverin() {
    this.el.nativeElement.style.backgroundColor = 'white';
    this.el.nativeElement.style.color = '#3F51B5';
  }
  @HostListener('mouseout') onhoverout() {
    this.el.nativeElement.style.backgroundColor = '#3F51B5';
    this.el.nativeElement.style.color = 'white';
  }
}
