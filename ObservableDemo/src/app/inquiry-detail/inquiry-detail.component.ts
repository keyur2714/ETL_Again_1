import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InquiryService } from '../inquiry-list/inquiry.service';
import { Inquiry } from '../inquiry-list/inquiry.model';

@Component({
  selector: 'app-inquiry-detail',
  templateUrl: './inquiry-detail.component.html',
  styleUrls: ['./inquiry-detail.component.css']
})
export class InquiryDetailComponent implements OnInit {

  id : number = 0;
  inquiry : Inquiry = new Inquiry();

  constructor(private activateRoute : ActivatedRoute,private inquiryService : InquiryService) { }

  ngOnInit() {
    this.id = this.activateRoute.snapshot.params.id;
    this.inquiryService.getInquiryById(this.id).subscribe(
      (data : Inquiry)=>{
        this.inquiry = data;
      }
    )
  }

}
