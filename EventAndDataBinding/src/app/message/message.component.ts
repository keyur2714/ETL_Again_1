import { Component } from '@angular/core';

@Component({
    selector : 'app-message',
    template: `<h1>{{message}}</h1>`,
    styles : ['h1{color : red}']
})
export class MessageComponent {
    message : string = 'Hello Radhe Krishna...!';
    constructor(){}
}