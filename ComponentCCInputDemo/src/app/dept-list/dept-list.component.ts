import { Component, OnInit } from '@angular/core';
import { Department } from './dept.model';

@Component({
  selector: 'app-dept-list',
  templateUrl: './dept-list.component.html',
  styleUrls: ['./dept-list.component.css']
})
export class DeptListComponent implements OnInit {

  deptList : Department[] = [];

  columnList : string[] = ["deptId","deptName","managerName"];

  headerList : string[] = ["Dept #","Dept Name","Manager"];
  constructor() { }

  ngOnInit() {
    let dept1 = new Department(10,"IT","Krishna");
    let dept2 = new Department(20,"Sales","Ram");
    let dept3 = new Department(30,"Hr","Laxman");
    let dept4 = new Department(40,"Purchase","Arjun");
    this.deptList.push(dept1);
    this.deptList.push(dept2);
    this.deptList.push(dept3);
    this.deptList.push(dept4);
  }

}
