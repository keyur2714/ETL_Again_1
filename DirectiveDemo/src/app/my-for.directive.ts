import { Directive , TemplateRef , ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appMyFor]'
})
export class MyForDirective {

  constructor(private templateRef : TemplateRef<any>,private viewContainerRef : ViewContainerRef) { }

  @Input() set appMyFor(loopCnt : number) {
    for(let i=1;i<=loopCnt;i++){
      console.log(this.templateRef.elementRef);
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }
  }
}
