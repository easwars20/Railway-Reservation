import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrainService } from '../train.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
destination:any;

  destinations!:any[]

  constructor(private trainservice:TrainService, private router:Router) { 
    this.destinations=this.trainservice.getdestinations()
  }

  ngOnInit(): void {
  }
  selectDestination(destination:any){
    this.trainservice.selectDestination(destination)
    this.router.navigate(['/trainlist'])
  }

}
