import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AdminComponent } from './admin/admin.component';
import { SigninComponent } from './signin/signin.component';
import { SignoutComponent } from './signout/signout.component';
import { HeaderComponent } from './header/header.component';
import { ItemsComponent } from './home/items/items.component';
import { AuthenticationService } from './auth/authentication.service';
import { OmsService } from './services/oms.service';
import { TokenInerceptorService } from './auth/token-inerceptor.service';
import { ManageOrdersComponent } from './admin/manage-orders/manage-orders.component';
import { OrderService } from './services/order.service';
import { OrderDetailComponent } from './admin/order-detail/order-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    AdminComponent,
    SigninComponent,
    SignoutComponent,
    HeaderComponent,
    ItemsComponent,
    ManageOrdersComponent,
    OrderDetailComponent
  ],
  entryComponents : [
    OrderDetailComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatPaginatorModule,
    MatDialogModule
  ],
  providers: [    
    AuthenticationService,
    OmsService,
    {
      provide : HTTP_INTERCEPTORS , useClass : TokenInerceptorService,multi : true
    },
    OrderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
