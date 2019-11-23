import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Inquiry } from './inquiry.model';

@Injectable({
  providedIn: 'root'
})
export class InquiryService {

  appUrl : string = 'http://localhost:3000/inquiries';

  constructor(private httpClient : HttpClient) { }

  getInquiryList() : Observable<Inquiry[]>{
    return this.httpClient.get<Inquiry[]>(this.appUrl).pipe(      
      map(data=>{
        for(let inquiry of data){
          inquiry.course.fees = inquiry.course.fees + (inquiry.course.fees * 5 /100);
        }
        return data;
      })
    );    
  }

  getInquiryById(id : number) : Observable<Inquiry>{
    return this.httpClient.get<Inquiry>(this.appUrl+"/"+id).pipe(      
      map(data=>{        
          data.course.fees = data.course.fees + (data.course.fees * 5 /100);        
          return data;
      })
    )
  }
}
