import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Component Communications';

  newMessage : string = '';

  messageList : string [] = [
    "Hi",
    "Hello",
    "How Are You?",
    "Good Morning",
    "Good Afternoon",
    "Good Evening"
  ];

  setMessage(event) : void {    
    this.newMessage = event;
    console.log(this.newMessage);
  }
}
