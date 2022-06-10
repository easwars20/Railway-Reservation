import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataserviceService } from '../dataservice.service';
import { TrainService } from '../train.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(private router:Router,private trainservice:TrainService,
    private dataservice:DataserviceService) { }

  ngOnInit(): void {
  }

  paynow(){
    var info = this.trainservice.selectedDestination.getValue()
    var bookingData = {
      passengername: info.person.name,
      age: info.person.age,
      gender: info.person.gender,
      trainclass: info.selectedFare.name,
      fare: info.selectedFare.fare,
      date: info.selectedDate,
      trainDetail: {
        id: info.id,
      }
    }
    console.log("data" + JSON.stringify(bookingData));
    
    this.dataservice.postDataSubscribe(`MyBookings`,bookingData)
    .subscribe(bookingData => {
      console.log(bookingData)
      this.router.navigate(['/mybookings'])

    })
  }

}
