import { Component, OnInit, Inject } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { ActivatedRoute } from '@angular/router';
import { Order } from '../manage-orders/order.model';
import { Location } from '@angular/common';
import { OmsService } from 'src/app/services/oms.service';
import { Observable, interval } from 'rxjs';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {

  orderId ?: number = 0;
  order : Order = new Order();
  fromPopup : boolean = false;
  
  constructor(private orderService ? : OrderService,
    private activatedRoute ?: ActivatedRoute,private location?:Location,private omsService ? :OmsService,
    public dialogRef?: MatDialogRef<OrderDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data?: Order) { }

  ngOnInit() {    
    if(this.data.id !== undefined){
      this.orderId = this.data.id;
      this.fromPopup = true;
    }else{
      this.orderId = this.activatedRoute.snapshot.params.id;    
    }
    this.orderService.getOrderById(this.orderId).subscribe(
      (data : Order)=>{
        this.order = data;                
      }
    )
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  back() : void{
    if(this.fromPopup){
      this.dialogRef.close("Hello i am back...!");
    }else{
      this.location.back();
    }
  }
}
