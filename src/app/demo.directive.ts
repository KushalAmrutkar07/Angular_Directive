import { Directive, ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appDemo]'
})
export class DemoDirective 
{

  constructor(public eobj : ElementRef) 
  {
    //console.log("Inside directive constructor");
    //eobj.nativeElement.style.color = 'blue';
  }

  @HostListener('mouseenter')onmouseenter()
  {
    this.eobj.nativeElement.style.background = 'blue';
  }

  @HostListener('mouseleave')onmouseleave()
  {
    this.eobj.nativeElement.style.background = 'red';
  }

}
