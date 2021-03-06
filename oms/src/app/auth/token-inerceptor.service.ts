import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TokenInerceptorService implements HttpInterceptor{
  

  constructor() { }

  intercept(req: import("@angular/common/http").HttpRequest<any>, next: import("@angular/common/http").HttpHandler): import("rxjs").Observable<import("@angular/common/http").HttpEvent<any>> {
    
    let token = sessionStorage.getItem("token");
    if(token){
      console.log("Inside Interceptor...!"+token);
      req = req.clone({
        setHeaders : {
          'Authorization' : `Bearer ${token}`
        }
      });
    }
    return next.handle(req).pipe(
      map(res=>{
        console.log(res+" ===========");
        return res;
      })
    );
  }
}
