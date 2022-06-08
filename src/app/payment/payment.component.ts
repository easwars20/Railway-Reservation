import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataserviceService } from '../dataservice.service';
import { EnrollmentService } from '../enrollment.service';
import { TrainService } from '../train.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  course!:any[]

  constructor(private router:Router,private enrollmentService:EnrollmentService, private trainservice:TrainService,
    private dataservice:DataserviceService) { }

  ngOnInit(): void {
  }

  enrollTrain(course:any){

this.enrollmentService.enroll(course);

  }
  paynow(){
    var info = this.trainservice.selectedDestination.getValue()
    if (info.new) {
      // this.bookings = [info];
      // this.bookingIds = [];
      var bookingData = {
        passengername: info.person.name,
        age: info.person.age,
        gender: info.person.gender,
        //trainId: info.trainId
        "trainDetail": {
          "id": info.id,
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

}
