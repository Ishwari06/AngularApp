import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustdir]'
})
export class CustdirDirective {

  constructor(private el: ElementRef) {
    console.log(el);
    el.nativeElement.style.backgroundColor='gray'
    el.nativeElement.style.display='none'
    //render.setStyle(el.nativeElement,'background','blue');
    
   }

}
