import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { StringOperationComponent } from './string-operation/string-operation.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ViewChildDemo';

  upperStr : string = '';

  @ViewChild("xyz",{static : true})
  xyz : ElementRef;

  @ViewChild(StringOperationComponent,{static : true})
  stringOperation : StringOperationComponent;

  ngOnInit(){
    this.stringOperation.str = this.xyz;    
  }
  convertToUpper(): void {
    alert('k');
    this.upperStr = this.stringOperation.convertToUpper();
  }


}
