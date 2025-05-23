import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCapital]'
})
export class CapitalDirective {

  constructor(private _elementref:ElementRef) {}

  @HostListener('keyup')
  change(){
    this._elementref.nativeElement.value=this._elementref.nativeElement.value.toUpperCase();
  }

}
