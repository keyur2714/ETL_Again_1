import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-string-operation',
  templateUrl: './string-operation.component.html',
  styleUrls: ['./string-operation.component.css']
})
export class StringOperationComponent implements OnInit {

  result : string = '';

  @ViewChild("res",{static : true})
  res : ElementRef;

  @ViewChild("str",{static : true})
  str : ElementRef;


  constructor() { 
    console.log('String Operation Object Created...');    
  }

  ngOnInit() {
  }
  upper(): void{
    this.result = this.str.nativeElement.value.toUpperCase();  
    this.res.nativeElement.innerHTML="<b>Result is : "+this.result+"</b>";
    this.res.nativeElement.style.color = 'red';
    this.res.nativeElement.style.fontSize = '35px';
    this.str.nativeElement.value = '';
  }
  // upper(str : string): void{
  //   this.result = str.toUpperCase();
  //   this.res.nativeElement.innerHTML="<b>Result is : "+this.result+"</b>";
  //   this.res.nativeElement.style.color = 'red';
  //   this.res.nativeElement.style.fontSize = '35px';
  // }

  // lower(str : string): void{
  //   this.result = str.toLowerCase();
  //   this.res.nativeElement.innerHTML="<b>Result is : "+this.result+"</b>";
  //   this.res.nativeElement.style.color = 'red';
  //   this.res.nativeElement.style.fontSize = '35px';
  // }

  lower(): void{
    this.result = this.str.nativeElement.value.toLowerCase();
    this.res.nativeElement.innerHTML="<b>Result is : "+this.result+"</b>";
    this.res.nativeElement.style.color = 'red';
    this.res.nativeElement.style.fontSize = '35px';
    this.str.nativeElement.value = '';
  }

  // reverse(str : string): void{
  //   let strArr = str.split('');
  //   this.result = strArr.reverse().join('');
  //   this.res.nativeElement.innerHTML="<b>Result is : "+this.result+"</b>";
  //   this.res.nativeElement.style.color = 'red';
  //   this.res.nativeElement.style.fontSize = '35px';
  //   //alert(strArr.reverse());
  // }

  reverse(): void{
    let strArr = this.str.nativeElement.value.split('');
    this.result = strArr.reverse().join('');
    this.res.nativeElement.innerHTML="<b>Result is : "+this.result+"</b>";
    this.res.nativeElement.style.color = 'red';
    this.res.nativeElement.style.fontSize = '35px';
    this.str.nativeElement.value = '';
    this.str.nativeElement.style.background = 'yellow';
    //alert(strArr.reverse());
  }


  convertToUpper() : string {
    console.log(this.str.nativeElement);
    return this.str.nativeElement.value.toUpperCase();
  }
  
}
