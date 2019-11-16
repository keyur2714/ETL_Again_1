import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServicesComponent } from './services/services.component';
import { EducationComponent } from './services/education/education.component';
import { SoftwareComponent } from './services/software/software.component';


const routes: Routes = [
  {path : 'home' , component : HomeComponent},
  {path : 'contact-us' , component : ContactUsComponent},
  {path : 'about-us' , component : AboutUsComponent},
  {path : 'services' , component : ServicesComponent,
   children : [
     {path : 'education' , component : EducationComponent},
     {path : 'software' , component : SoftwareComponent}
   ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
