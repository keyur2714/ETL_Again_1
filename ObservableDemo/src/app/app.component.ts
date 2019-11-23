import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { LoggingService } from './logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  
})
export class AppComponent implements OnInit{
  title = 'ObservableDemo';

  num : number = 0;

  subscription : Subscription = new Subscription();
  numberObservable = interval(1000);

  constructor(private loggingService : LoggingService){
    this.loggingService.logInfo("App Coomponent Object created...!");
  }

  ngOnInit(){
    this.subscription = this.numberObservable.subscribe(
      (data)=>{
        this.num = data;
        if(this.num === 15){
          this.stop();
        }          
      },
      (error)=>{

      }
    )
  }

  stop():void{
    this.subscription.unsubscribe();
  }

}
