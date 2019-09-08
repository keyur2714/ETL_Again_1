import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-votting',
  templateUrl: './votting.component.html',
  styleUrls: ['./votting.component.css']
})
export class VottingComponent implements OnInit {

  age : number = 18;

  constructor() { }

  ngOnInit() {
  }

}
