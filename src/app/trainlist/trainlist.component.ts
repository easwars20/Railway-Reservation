import { Component, OnInit } from '@angular/core';
import { TrainService } from '../train.service';

@Component({
  selector: 'app-trainlist',
  templateUrl: './trainlist.component.html',
  styleUrls: ['./trainlist.component.css']
})
export class TrainlistComponent implements OnInit {

  constructor(private trainservice:TrainService) { }

  newFare:any
  j:any

  ngOnInit(): void {
    this.trainservice.selectedDestination.subscribe((data)=>{
      this.t=data
    });
  }

  t:any;

bookTicket(item:any){}

// [(ngModel)]="newTrainClass[i]" (change)="getFare(i)"
getFare(index: number) {
  console.log("index" + index)
  this.newFare = this.t.trainFares[index]
}
}
