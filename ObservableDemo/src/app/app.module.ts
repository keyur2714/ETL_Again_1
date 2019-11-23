import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { InquiryListComponent } from './inquiry-list/inquiry-list.component';
import { LoggingService } from './logging.service';
import { InquiryDetailComponent } from './inquiry-detail/inquiry-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    InquiryListComponent,
    InquiryDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path : 'inquiries' , component : InquiryListComponent},
      {path : 'inquiries/:id' , component : InquiryDetailComponent}
    ]),
    HttpClientModule
  ],
  providers: [
    LoggingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
