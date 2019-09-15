import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MessageComponent } from './message/message.component';
import { MyTableComponent } from './my-table/my-table.component';
import { StudentListComponent } from './student-list/student-list.component';
import { DeptListComponent } from './dept-list/dept-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    MyTableComponent,
    StudentListComponent,
    DeptListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
