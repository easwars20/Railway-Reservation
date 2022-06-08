import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TrainlistComponent } from './trainlist/trainlist.component';
import { PassengerComponent } from './passenger/passenger.component';
import{ReactiveFormsModule} from '@angular/forms';
import { MasterdataComponent } from './masterdata/masterdata.component'
import { FormsModule } from '@angular/forms';
import { MasterdatatraindetailsComponent } from './masterdatatraindetails/masterdatatraindetails.component';
import { PaymentComponent } from './payment/payment.component';
import { MybookingsComponent } from './mybookings/mybookings.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    TrainlistComponent,
    PassengerComponent,
    MasterdataComponent,
    MasterdatatraindetailsComponent,
    PaymentComponent,
    MybookingsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
