import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../home/items/item.model';
import { map } from 'rxjs/operators';

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

  getItemNameById(id : number) : Observable<string>{
    return this.httpClient.get<any>(this.appUrl+"/"+id).pipe(
      map(item=>
        item.name
      )
    );
  }
}
