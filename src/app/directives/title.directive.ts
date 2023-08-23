import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTitle]'
})
export class TitleDirective {

  constructor(private elem: ElementRef) {
    elem.nativeElement.style.textAlign = 'center';
   }

}
