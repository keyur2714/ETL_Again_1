import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.css']
})
export class MyTableComponent implements OnInit {

  @Input()
  headerList : string[] = [];
  @Input()
  dataList : any[] = [];
  @Input()
  columnList : string[] =[];

  selectedRow : any;

  @Output() getSelectedRow = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  setCurrentRow(data) : void {
    this.selectedRow = data;
    this.getSelectedRow.emit(this.selectedRow);
  }
}
