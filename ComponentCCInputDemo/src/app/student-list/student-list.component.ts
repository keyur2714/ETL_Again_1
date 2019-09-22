import { Component, OnInit } from '@angular/core';
import { Student } from './student.model';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  studentList : Student[] = [];

  selectedStudent : Student;

  columnList : string[] = ["rollNo","name"];

  headerList : string[] = ["Roll #","Name"];

  constructor() { }

  ngOnInit() {
    let student1 = new Student();
    student1.rollNo = '03MTECH32';
    student1.name = 'Keyur';
    student1.std = 'MTech';


    let student2 = new Student();
    student2.rollNo = '03MCA26';
    student2.name = 'Denish';
    student2.std = 'MCA';

    let student3 = new Student();
    student3.rollNo = '03BCA44';
    student3.name = 'vinit';
    student3.std = 'BCA';

    this.studentList.push(student1);
    this.studentList.push(student2);
    this.studentList.push(student3);
  }

  getRow(event) : void {
    console.log(event);
    this.selectedStudent = event;
  }
}
