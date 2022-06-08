import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { MasterdataComponent } from './masterdata/masterdata.component';
import { MasterdatatraindetailsComponent } from './masterdatatraindetails/masterdatatraindetails.component';
import { MybookingsComponent } from './mybookings/mybookings.component';
import { PassengerComponent } from './passenger/passenger.component';
import { PaymentComponent } from './payment/payment.component';
import { TrainlistComponent } from './trainlist/trainlist.component';

const routes: Routes = [
  { path :'', component:HomepageComponent},
  { path :'trainlist', component:TrainlistComponent},
  {path:'passenger', component:PassengerComponent},
  { path:'masterdata', component:MasterdataComponent},
  { path:'payment', component:PaymentComponent},
  {path: 'masterdatatraindetails', component:MasterdatatraindetailsComponent},
  {path:'mybookings', component:MybookingsComponent}
];


@NgModule({
  imports: [
  RouterModule.forRoot(routes)],
  
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
