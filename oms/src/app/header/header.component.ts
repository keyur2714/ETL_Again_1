import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input()
  loggedIn  :boolean = false;

  @Input()
  userRole : string = '';

  constructor() { }

  ngOnInit() {
  }

}
