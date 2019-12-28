import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mask',
  pure: true
})
export class MaskPipe implements PipeTransform {

  constructor(){
    console.log("MaskPipe Object Created...!");
  }

  transform(value: string, maskChar ?: string,noOfChar ?: number): any {
    //alert(value);
    let newValue : string = '';
    let maskCharLength = value.length-noOfChar;
    for(let i=1 ;i<=maskCharLength;i++){
      newValue = newValue + maskChar;
    }
    newValue = newValue + value.substring(maskCharLength,value.length);

    return newValue;
  }

}
