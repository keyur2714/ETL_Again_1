import { Directive , TemplateRef , ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appMyIf]'
})
export class MyIfDirective {

  constructor(private templateRef: TemplateRef<any>,private viewContainerRef : ViewContainerRef) { 
    console.log("MyIfDirective Object Created...!");
  }

  @Input("appMyIf") set myIf(condition : boolean) {        
    if(condition) {
      //alert(true);
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }else{
      //alert(false);
      this.viewContainerRef.clear();
    }
  }

  @Input() set appMyIfParam1(param1 : string) {
    //alert(1);
    console.log(param1);
  }
}
