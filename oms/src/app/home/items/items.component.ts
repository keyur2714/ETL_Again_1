import { Component, OnInit } from '@angular/core';
import { Item } from './item.model';
import { OmsService } from 'src/app/services/oms.service';
import { ItemOrder } from 'src/app/services/item-order.model';
import { Order } from 'src/app/admin/manage-orders/order.model';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  order : Order = new Order();
  orderItems : ItemOrder[] = [];
  itemList : Item[] = [];
  count : number = 0;
  currentOrderId : number = 0;

  constructor(private omsService : OmsService,private orderService ?: OrderService) { }

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

  placeOrder() : void{  
    let order : Order = new Order();
    order.orderItems = this.orderItems;
    let price = 0;
    for(let itemOrder of this.orderItems){
      price = price + (itemOrder.qty * itemOrder.price);
    }
    order.price = price;
    this.orderService.getOrders().subscribe(
      (data : Order[])=>{
        order.id = data[data.length-1].id + 1;
        this.orderService.saveOrder(order).subscribe(
          (data : Order)=>{
            console.log("Order Placed Successfully.");
            this.currentOrderId = order.id;
          }
        )
      }
    )
  }

}
