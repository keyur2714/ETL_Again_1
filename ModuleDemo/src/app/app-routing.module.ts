import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, NoPreloading } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { PageNotFoundComponent } from './page-notfound.component';


const routes: Routes = [
  {path : '' , component : HomeComponent},
  {path : 'home' , component : HomeComponent},
  {path : 'aboutus' , component : AboutusComponent},
  {path : 'admin', loadChildren: () => import(`./admin/admin.module`).then(a => a.AdminModule) },
  {path : 'user', loadChildren: () => import(`./user/user.module`).then(a => a.UserModule) },
  {path : 'contactus' , component : ContactusComponent},
  {path : '**' , component : PageNotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,{preloadingStrategy : PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  constructor(){
    console.log("App Routing Module Loaded...");
  }
}
