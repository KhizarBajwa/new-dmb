import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { PricingComponent } from './pricing/pricing.component';
import { DoctorComponent } from './doctor/doctor.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';

import { NgxMasonryModule } from 'ngx-masonry';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [HomeComponent, AboutComponent, ServicesComponent, PricingComponent, DoctorComponent, BlogComponent, ContactComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    NgxMasonryModule
  ]
})
export class LandingpageModule { }
