import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'loop',
  pure : true
})
export class LoopPipe implements PipeTransform {

  constructor(){
    console.log("Loop Pipe Object Created...!");
  }

  transform(value: any,len ?: number): any {
    let newValue = '';
    for(let i=1;i<=len;i++){
      newValue = newValue + value+"\t";
    }
    return newValue;
  }

}
