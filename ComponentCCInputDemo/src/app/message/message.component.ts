import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit, AfterViewInit {

  @Input()
  message : string = 'Hello Radhe Krishna...!';

  @Input('messageType') msgType : string = 'success';

  @Output("getMessage") getFormattedMessage = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    
  }

  ngAfterViewInit() {
    this.getFormattedMessage.emit("New Message : "+this.message);
  }
}
