import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numeric-operation',
  templateUrl: './numeric-operation.component.html',
  styleUrls: ['./numeric-operation.component.css']
})
export class NumericOperationComponent implements OnInit {

  number1 : number = 11;
  number2 : number = 22;
  result : number;

  constructor() { }

  ngOnInit() {
  }

  add() : void {
    this.result = this.number1 + this.number2;
  }

  sub() : void {
    this.result = this.number1 - this.number2;
  }

  mul() : void {
    this.result = this.number1 * this.number2;
  }

  div() : void {
    if(this.number2 !== 0){
      this.result = this.number1 / this.number2;
    }    
  }
}
