import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { InquiryService } from '../inquiry-list/inquiry.service';
import { ActivatedRoute } from '@angular/router';
import { Inquiry } from '../inquiry-list/inquiry.model';
import { Course } from '../inquiry-list/course.model';

@Component({
  selector: 'app-inquiry-entry',
  templateUrl: './inquiry-entry.component.html',
  styleUrls: ['./inquiry-entry.component.css']
})
export class InquiryEntryComponent implements OnInit {

  inqiry : Inquiry = new Inquiry();
  inquiryEntryForm : FormGroup;
  editId : number = 0;
  courseList : Course[] = [
    {
      "id": 1,
      "courseCode": "ANG",
      "courseName": "Angular",
      "fees": 12000
    },
    {
      "id": 2,
      "courseCode": "JAVA",
      "courseName": "Java",
      "fees": 10000 
    },
    {
      "id": 3,
      "courseCode": "BIGDATA",
      "courseName": "Hadoop Dev",
      "fees": 15000 
    }
  ];

  constructor(private formBuilder : FormBuilder,private inquiryService:InquiryService,private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    if(this.activatedRoute.snapshot.params.id !== undefined)
      this.editId = this.activatedRoute.snapshot.params.id;      
    if(this.editId !== 0){
      this.inquiryService.getInquiryById(this.editId).subscribe(
        (data : Inquiry)=>{
          this.inqiry = data;          
          this.createInquiryEntryForm();
        }
      )
    }else{
      this.createInquiryEntryForm();
    }    
    
  }

  createInquiryEntryForm(): void{
    this.inquiryEntryForm = this.formBuilder.group({      
      id : this.formBuilder.control(this.inqiry.id,Validators.required),
      name : this.formBuilder.control(this.inqiry.name,[Validators.required,Validators.minLength(3)]),
      email : this.formBuilder.control(this.inqiry.email,[Validators.required,Validators.email]),
      mobileNo : this.formBuilder.control(this.inqiry.mobileNo,[Validators.required,Validators.maxLength(10),Validators.pattern('^[0-9]+$')]),
      course : this.formBuilder.control(this.inqiry.course)   
    });    
  }

  save() :void {
    this.inqiry = this.inquiryEntryForm.value;
    console.log(JSON.stringify(this.inqiry));
    if(this.editId !== 0){
      this.inquiryService.updateInquiry(this.inqiry).subscribe(
        (data)=>{
          alert("Inquiry Updated Succefully...");
        }
      );      
    }else{
      this.inquiryService.saveInquiry(this.inqiry).subscribe(
        (data)=>{
          alert("Inquiry Saved Succefully...");
        }
      );    
    }    
  }
}
