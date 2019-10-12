import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Lookup } from './lookup.model';

@Component({
  selector: 'app-my-dropdown',
  templateUrl: './my-dropdown.component.html',
  styleUrls: ['./my-dropdown.component.css']
})
export class MyDropdownComponent implements OnInit {

  @Input()
  selectedValue : Lookup;

  @Input()
  name : string = 'select';
  @Input()
  placeHolder : string = 'Select';
  @Input()
  dataList : Lookup[] = [];

  @Output("getValue")
  getSelectedValue = new EventEmitter<Lookup>();

  constructor() { }

  ngOnInit() {    
  }

  setSelectedValue() : void{
    //alert(1);
    //alert(this.selectedValue.desc);
    this.getSelectedValue.emit(this.selectedValue);
  }

}
