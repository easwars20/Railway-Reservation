import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataserviceService } from '../dataservice.service';
import { TrainService } from '../train.service';

@Component({
  selector: 'app-mybookings',
  templateUrl: './mybookings.component.html',
  styleUrls: ['./mybookings.component.css']
})
export class MybookingsComponent implements OnInit {

  constructor(private router:Router, private trainservice: TrainService, private dataservice: DataserviceService) { }

  bookings!:any
  
  ngOnInit(): void {
    this.dataservice.getData(`MyBookings`)
        .subscribe(bookingData => {
          console.log(bookingData)
          this.bookings=bookingData
         })
   
}
removeBooking(booking: any) {
  this.dataservice.postData(`MyBookings/delete`, booking)
}
}
