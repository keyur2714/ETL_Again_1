import { Directive, ElementRef, AfterViewInit, Input } from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective implements AfterViewInit{

  @Input()
  color : string = 'orange';
  @Input()
  fontSize : string = '20px';

  constructor(private elementRef : ElementRef) { 
    console.log("StyleDirective Object Created...!");
  }

  ngAfterViewInit(){
    console.log(this.elementRef);
    this.elementRef.nativeElement.style.color = this.color;
    this.elementRef.nativeElement.style.fontSize = this.fontSize;
  }

  changeColor(elementRef : ElementRef,color : string) : void {
    elementRef.nativeElement.style.color = color;
  }
}
