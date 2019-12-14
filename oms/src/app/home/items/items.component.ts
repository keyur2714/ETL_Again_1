import { Component, OnInit } from '@angular/core';
import { Item } from './item.model';
import { OmsService } from 'src/app/services/oms.service';
import { ItemOrder } from 'src/app/services/item-order.model';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  orderItems : ItemOrder[] = [];
  itemList : Item[] = [];
  count : number = 0;

  constructor(private omsService : OmsService) { }

  ngOnInit() {
    this.getItems();
  }

  getItems() : void{
    this.omsService.getItems().subscribe(
      (data : Item[])=>{
        this.itemList = data;
      }
    )
  }

  addToCart(id,price,qty):void{
    if(qty === undefined){
      alert("Please Select Quntity first.");
    }
    let itemOrder = new ItemOrder();
    itemOrder.id = id;
    itemOrder.price = price;
    itemOrder.qty = parseInt(qty);
    this.orderItems.push(itemOrder);
    sessionStorage.setItem("count",this.orderItems.length+'');
    this.count  = this.orderItems.length;
  }

}
