import { HomeComponent } from './landingpage/home/home.component';
import { LandingpageModule } from './landingpage/landingpage.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './landingpage/about/about.component';
import { BlogComponent } from './landingpage/blog/blog.component';
import { ContactComponent } from './landingpage/contact/contact.component';
import { DoctorComponent } from './landingpage/doctor/doctor.component';
import { PricingComponent } from './landingpage/pricing/pricing.component';
import { ServicesComponent } from './landingpage/services/services.component';

const routes: Routes = [
  // {path:"", component: DashboardComponent}
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "blog", component: BlogComponent },
  { path: "contact", component: ContactComponent },
  { path: "doctor", component: DoctorComponent },
  { path: "pricing", component: PricingComponent },
  { path: "services", component: ServicesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
