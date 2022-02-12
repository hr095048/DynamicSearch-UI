import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlansDataComponent } from './plans-data/plans-data.component';
import { InsuranceServiceService } from './service/insurance-service.service';
import {  ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PlansDataComponent
  ],
  imports: [


    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule

  ],

  providers: [InsuranceServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
