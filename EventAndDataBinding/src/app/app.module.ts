import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { StringOperationComponent } from './string-operation/string-operation.component';
import { NumericOperationComponent } from './numeric-operation/numeric-operation.component';

@NgModule({
  declarations: [
    AppComponent,
    StringOperationComponent,
    NumericOperationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
