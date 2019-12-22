import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { Order } from './order.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { OrderDetailComponent } from '../order-detail/order-detail.component';


@Component({
  selector: 'app-manage-orders',
  templateUrl: './manage-orders.component.html',
  styleUrls: ['./manage-orders.component.css']
})
export class ManageOrdersComponent implements OnInit,AfterViewInit {

  orders : Order[] = [];

  dataSource : MatTableDataSource<Order> = new MatTableDataSource<Order>(); 

  displayedColumns: string[] = ['id', 'price'];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;


  constructor(private orderService : OrderService,public dialog: MatDialog) { }

  ngOnInit() {
    this.getOrders();
  }

  getOrders() : void{
    this.orderService.getOrders().subscribe(
      (data : Order[])=>{
        this.orders = data;
        this.dataSource.data = this.orders;
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      }
    )
  }

  openDialog(orderId : number) : void {

    const dialogRef = this.dialog.open(OrderDetailComponent, {
      width: '750px',
      data: {id: orderId}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed'+" "+result);      
    });

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngAfterViewInit() {
        
  }

}
