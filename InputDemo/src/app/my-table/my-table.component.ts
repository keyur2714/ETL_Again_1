import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.css']
})
export class MyTableComponent implements OnInit {

  @Input()
  dataList : any[] = [];

  @Input()
  headerList : string[] = [];

  @Input()
  fieldNameList : string[] = [];

  @Input("bgColor")
  backGroundColor : string = 'dark';

  @Input()
  color : string = 'info';


  constructor() { }

  ngOnInit() {
  }

}
