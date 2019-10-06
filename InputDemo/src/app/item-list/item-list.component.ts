import { Component, OnInit } from '@angular/core';
import { Item } from './item.model';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  itemList : Item[] = [new Item(1,'GTEA','Ginger Tea',15),new Item(2,'CCOFFEE','Cold Coffee',30),new Item(2,'CR','Cream Roll',10)];

  headerList : string[] = ["Item Id","Item","Desc","Price"];

  fieldNameList : string[] = ["item_id","code","desc","unitPrice"];

  constructor() { }

  ngOnInit() {
  }

}
