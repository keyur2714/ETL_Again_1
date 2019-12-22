import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../admin/manage-orders/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  appUrl : string = 'http://localhost:3000/orders';

  constructor(private httpClient : HttpClient) { }

  getOrders() : Observable<Order[]>{
    return this.httpClient.get<Order[]>(this.appUrl);
  }

  saveOrder(order :Order) : Observable<Order>{
    return this.httpClient.post<Order>(this.appUrl,order);
  }

  getOrderById(orderId) : Observable<Order>{
    return this.httpClient.get<Order>(this.appUrl+"/"+orderId);
  }
}
