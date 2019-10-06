import { Component, OnInit } from '@angular/core';
import { Student } from './student.model';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  studentList : Student[] = [];

  headerList : string[] = ["Roll No","Name","Mobile Number"];

  fieldNameList : string[] = ["rollNo","name","mobileNo"];

  constructor() { }

  ngOnInit() {
    let student1 = new Student(27,'keyur','7387029671');
    let student2 = new Student(26,'denish','7387029212');
    let student3 = new Student(44,'vinit','7387029222');
    this.studentList = [student1,student2,student3];
  }

}
