
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
  data:any;
  

  constructor(private trainservice:TrainService, private router:Router) { 
    //this.destinations=this.trainservice.getdestinations()
    
  }

  settraindestination(data:any){

    this.destinations = data
    
    }
    
    gettraindestination(){
    
    this.trainservice.gettraindestination().subscribe(
    
    (data: any) => {
    console.log(data)
    this.settraindestination(data);
    
    console.log(this.destinations);
    
    },
    
      (      err: any) => console.error(err),
    
    );
    
    }
  ngOnInit(): void {
    this.gettraindestination()
  }
  selectDestination(destination:any){
    this.trainservice.selectDestination(destination)
    this.router.navigate(['/trainlist'])
  }

}


