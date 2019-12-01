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
    return this.httpClient.get<Inquiry>(this.appUrl+"/"+id);
    // return this.httpClient.get<Inquiry>(this.appUrl+"/"+id).pipe(      
    //   map(data=>{        
    //       data.course.fees = data.course.fees + (data.course.fees * 5 /100);        
    //       return data;
    //   })
    // )
  }

  saveInquiry(inquiry : Inquiry) : Observable<Inquiry>{
    return this.httpClient.post<Inquiry>(this.appUrl,inquiry);    
  }

  updateInquiry(inquiry : Inquiry) : Observable<Inquiry>{
    return this.httpClient.put<Inquiry>(this.appUrl+"/"+inquiry.id,inquiry);    
  }

  deleteInquiryById(id : number) : Observable<any>{
    return this.httpClient.delete<any>(this.appUrl+"/"+id);
  }
}

