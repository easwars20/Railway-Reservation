import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataserviceService } from '../dataservice.service';
import { EnrollmentService } from '../enrollment.service';
import { TrainService } from '../train.service';

@Component({
  selector: 'app-mybookings',
  templateUrl: './mybookings.component.html',
  styleUrls: ['./mybookings.component.css']
})
export class MybookingsComponent implements OnInit {
course!:any[]
  constructor(private router:Router, private trainservice: TrainService, private dataservice: DataserviceService, private enrollmentService:EnrollmentService) { }
  enrollments!:any
  bookings: any[] = [];
  bookingIds: any[] = [];
  ngOnInit(): void {
    this.dataservice.getData(`MyBookings`)
        .subscribe(bookingData => {
          console.log(bookingData)
          this.enrollments=bookingData
         })
    // this.enrollmentService.enrollments.subscribe((bookingData) =>{
    //   this.enrollments=bookingData;
    // }
    // )

  //   var info = this.trainservice.selectedDestination.getValue()
  //   if (info.new) {
  //     this.bookings = [info];
  //     this.bookingIds = [];
  //     var bookingData = {
  //       passengername: info.person.name,
  //       age: info.person.age,
  //       gender: info.person.gender,
  //       //trainId: info.trainId
  //       "trainDetail": {
  //         "id": info.id,
  //       }
  //     }
  //     console.log("data" + JSON.stringify(bookingData));
      
  //     this.dataservice.postDataSubscribe(`MyBookings`,bookingData)
  //     .subscribe(bookingData => {
  //       console.log(bookingData)
  //     })
  //   }
  // }

}}
