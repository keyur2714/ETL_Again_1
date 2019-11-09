import { Component, ViewChild, ElementRef } from '@angular/core';
import { StyleDirective } from './style.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DirectiveDemo';

  @ViewChild("e1",{static : true})
  e1 : ElementRef;

  @ViewChild("e2",{static : true})
  e2 : ElementRef;

  @ViewChild(StyleDirective , {static : true})
  appStyle : StyleDirective;

  changeColor() : void {
    this.appStyle.changeColor(this.e2,'blue');
  }
}
