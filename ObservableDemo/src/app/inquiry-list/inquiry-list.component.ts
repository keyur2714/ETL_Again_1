import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../logging.service';
import { InquiryService } from './inquiry.service';
import { Inquiry } from './inquiry.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inquiry-list',
  templateUrl: './inquiry-list.component.html',
  styleUrls: ['./inquiry-list.component.css'],
  providers : [InquiryService]
})
export class InquiryListComponent implements OnInit {

  inquiryList : Inquiry[] = [];

  constructor(private loggingService : LoggingService,private inquiryService : InquiryService,private router:Router) { 
    this.loggingService.logInfo("Hi...");
  }

  ngOnInit() {
    this.getInquiryList();  
  }

  getInquiryList() : void{
    this.inquiryService.getInquiryList().subscribe(
      (data)=>{
        this.inquiryList = data;
      },
      (error)=>{

      }
    )
  } 

  edit(id : number) : void {
    this.router.navigate(['inquiryEntry',id]);
  }
}
