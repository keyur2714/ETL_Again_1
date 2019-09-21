import { Component, OnInit, Input, Output , EventEmitter } from '@angular/core';
import { Lookup } from '../registration/lookup.model';

@Component({
  selector: 'app-my-dropdown',
  templateUrl: './my-dropdown.component.html',
  styleUrls: ['./my-dropdown.component.css']
})
export class MyDropdownComponent implements OnInit {

  @Input() name : string = '';
  @Input() dataList : Lookup[] = [];
  @Input() label :string = '-:Select:-'
  @Input() selectedValue : Lookup = new Lookup();


  @Output('getSelectedValue') value = new EventEmitter<Lookup>();

  constructor() { }

  ngOnInit() {
  }

  setSelectedValue():void {
    alert(this.selectedValue.desc+ " 1 ");
    this.value.emit(this.selectedValue);
  }
}
