import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// Third party imports
import { NgxLoadingModule } from 'ngx-loading';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

// App Imports
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    // Third party imports
    NgxLoadingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
