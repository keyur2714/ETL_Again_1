import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AdminComponent } from './admin/admin.component';
import { SigninComponent } from './signin/signin.component';
import { SignoutComponent } from './signout/signout.component';
import { ItemsComponent } from './home/items/items.component';


const routes: Routes = [
  {path : 'home' , component : HomeComponent,
    children : [{
      path : 'items' , component : ItemsComponent
    }]
  },
  {path : 'aboutus' , component : AboutusComponent},
  {path : 'contactus' , component : ContactusComponent},
  {path : 'admin' , component : AdminComponent},
  {path : 'signin' , component : SigninComponent},
  {path : 'signout' , component : SignoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
