import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-operation',
  templateUrl: './string-operation.component.html',
  styleUrls: ['./string-operation.component.css']
})
export class StringOperationComponent implements OnInit {

  result : string = '';
  flag : boolean = true;

  constructor() { }

  ngOnInit() {
  }

  setFlag(str : string)  : void {
    if( str !== ''){
      this.flag = false;
    }else{
      this.flag = true;
    }
  } 

  toUpper(str : string) : void {
    console.log("Hello Radhe Krishna..."+str);
    this.result = str.toUpperCase();
  }

  toLower(str : string) : void {
    console.log("Hello Radhe Krishna..."+str);
    this.result = str.toLowerCase();
  }

  toReverse(str : string) : void {
    console.log("Hello Radhe Krishna..."+str);
    console.log(str.split('').reverse().join(''));
    this.result = str.split('').reverse().join('');
  }
}
