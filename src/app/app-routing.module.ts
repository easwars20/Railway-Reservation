import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { PassengerComponent } from './passenger/passenger.component';
import { TrainlistComponent } from './trainlist/trainlist.component';

const routes: Routes = [
  { path :'', component:HomepageComponent},
  { path :'trainlist', component:TrainlistComponent},
  {path:'passenger', component:PassengerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
