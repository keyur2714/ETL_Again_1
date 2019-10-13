import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Student } from './student.model';
import { Course } from './course.model';

@Component({
  selector: 'app-student-entry',
  templateUrl: './student-entry.component.html',
  styleUrls: ['./student-entry.component.css']
})
export class StudentEntryComponent implements OnInit {

  newStudent : Student = new Student();
  isSubmittedAndValid : boolean = false;

  courseList : Course[] = [new Course(1,'ANG','Angular',12000),new Course(2,'JAVA','Java',8000),new Course(3,'BD','Big Data',15000)];

  constructor() { }

  ngOnInit() {
    this.newStudent.gender = 'F';
    this.newStudent.course = this.courseList[1];
  }

  save(frm : NgForm) : void {
    console.log(frm);
    if(frm.valid){
      console.log(frm.value);
      console.log(frm.controls['name'].value);
      this.newStudent.print();
      this.isSubmittedAndValid = true;
    }
  }
  
  reset(frm : NgForm) : void{    
    this.newStudent = new Student();    
    this.newStudent.gender = 'F';
    this.newStudent.course = this.courseList[1];    
    frm.reset(
      this.newStudent
    );    
  }
}
