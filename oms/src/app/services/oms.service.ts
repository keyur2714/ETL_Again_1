import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../home/items/item.model';

@Injectable({
  providedIn: 'root'
})
export class OmsService {

  appUrl : string = 'http://localhost:3000/items';

  constructor(private httpClient:HttpClient) { }

  getItems() : Observable<Item[]>{
    return this.httpClient.get<Item[]>(this.appUrl);
  }

  getItemById(id : number) : Observable<Item>{
    return this.httpClient.get<Item>(this.appUrl+"/"+id);
  }
}
