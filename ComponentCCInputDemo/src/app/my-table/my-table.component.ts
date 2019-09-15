import { Component, OnInit, Input } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
