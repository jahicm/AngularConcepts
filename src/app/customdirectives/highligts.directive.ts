import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighligts]',
  standalone: true
})
export class HighligtsDirective {

  @HostBinding('style.backgroundColor') bgColor: string = 'transparent';
  @HostListener('mouseenter') onMouseEnter(){
    this.bgColor="yellow";
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.bgColor="red";
  }
  constructor() { }

}
