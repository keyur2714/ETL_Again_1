import { Component, OnInit } from '@angular/core';
import { Inquiry } from './inquiry.model';

@Component({
  selector: 'app-manage-inquiries',
  templateUrl: './manage-inquiries.component.html',
  styleUrls: ['./manage-inquiries.component.css']
})
export class ManageInquiriesComponent implements OnInit {

  message : string = '';
  newInquiry : Inquiry = new Inquiry();
  inquiryList : Inquiry[] = [];
  isUpdate : boolean = false;

  constructor() { }

  ngOnInit() {
    let inquiry1 = new Inquiry(1,"poonam","poonam.angular@gmail.com","9898121212","Angular");
    let inquiry2 = new Inquiry(2,"renu","renu.angular@gmail.com","9898121333","Angular");
    this.inquiryList.push(inquiry1);
    this.inquiryList.push(inquiry2);
    this.newInquiry.srNo = 0;
    this.newInquiry.courseName = 'Angular';
  }

  addInquiry() : void {
    this.inquiryList.push(this.newInquiry);
    this.message = 'Inquiry Added with Sr No. '+this.newInquiry.srNo;
    this.newInquiry = new Inquiry(0,'','','','Angular');
  }

  updateInquiry(): void {
    let inq = this.inquiryList.find(inq => inq.srNo === this.newInquiry.srNo);
    let updateIdx = this.inquiryList.indexOf(inq);
    this.inquiryList[updateIdx] = inq;
    this.isUpdate = false;
    this.message = 'Inquiry Updated with Sr No. '+inq.srNo;
    this.newInquiry = new Inquiry(0,'','','','Angular');
  }

  edit(srNo : number) : void {

    let inq = this.inquiryList.find(inq => inq.srNo === srNo);
    this.newInquiry = inq;
    this.isUpdate = true;
  }

  delete(srNo : number) : void {
    let confirmMsg = confirm("Are you sure want to delete this inquiry?");
    if(confirmMsg) {
      let deleteIdx = this.inquiryList.indexOf(this.inquiryList.find(inq => inq.srNo === this.newInquiry.srNo));
      this.inquiryList.splice(deleteIdx,1);
      this.message = 'Inquiry Delete with Sr No. '+srNo;
    }
  }
}
