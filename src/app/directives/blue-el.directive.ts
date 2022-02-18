import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appBlueEl]'
})
export class BlueElDirective {

  constructor(private el:ElementRef) { 
    el.nativeElement.style.color='blue';
  }

}
