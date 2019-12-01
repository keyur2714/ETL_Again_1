import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { InquiryListComponent } from './inquiry-list/inquiry-list.component';
import { LoggingService } from './logging.service';
import { InquiryDetailComponent } from './inquiry-detail/inquiry-detail.component';
import { InquiryEntryComponent } from './inquiry-entry/inquiry-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    InquiryListComponent,
    InquiryDetailComponent,
    InquiryEntryComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path : 'inquiries' , component : InquiryListComponent},
      {path : 'inquiries/:id' , component : InquiryDetailComponent},
      {path : 'inquiryEntry' , component : InquiryEntryComponent},            
      {path : 'inquiryEntry/:id' , component : InquiryEntryComponent}            
    ]),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    LoggingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
