import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrainService } from '../train.service';

@Component({
  selector: 'app-passenger',
  templateUrl: './passenger.component.html',
  styleUrls: ['./passenger.component.css']
})
export class PassengerComponent implements OnInit {



  preferenceList = [];
  genderList = [];
  foodList = [];

  pname: string[] = [''];
  age: number[];
  gender: any[] = ['-- gender --'];
  preference: any[] = ['-- preference --'];
  food: any[] = ['-- food --'];

  passengers = [1];

  constructor(private trainservice:TrainService
    private router: Router,
  ) { }

  ngOnInit(): void {
    addPassenger() {
      this.pname.push('');
      this.age.push(undefined);
      this.gender.push('-- gender --');
      this.preference.push('-- preference --');
      this.food.push('-- food --');
      this.passengers.push(this.passengers.length);
    }
  
    deletePassenger(pas: number) {
      this.pname.splice(pas, 1);
      this.age.splice(pas, 1);
      this.gender.splice(pas, 1);
      this.preference.splice(pas, 1);
      this.food.splice(pas, 1);
      this.passengers.pop();
    }
  
    submitPassengerDetails() {
  }

}
