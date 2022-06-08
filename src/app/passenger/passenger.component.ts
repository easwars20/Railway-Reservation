import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrainService } from '../train.service';
import{FormBuilder,FormControl, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-passenger',
  templateUrl: './passenger.component.html',
  styleUrls: ['./passenger.component.css']
})
export class PassengerComponent implements OnInit {

  
  ListData:any

  

    details=new FormGroup({
    name: new FormControl('',Validators.required),
    age: new FormControl('',Validators.required),
    number: new FormControl('',Validators.required),
    gender: new FormControl('',Validators.required),
  })
  get name() {
    return this.details.get('name')
  }
  get age(){
    return this.details.get('age')
  }
  get number(){
    return this.details.get('number')
  }




  constructor(private fb:FormBuilder, private trainservice: TrainService, private router:Router){
    this.ListData=[];
    // this.details=this.fb.group
    //  ({
    //   name: new FormControl('',Validators.required),
    //   age: new FormControl('',Validators.required),
    //   number: new FormControl('',Validators.required),
    //   gender: new FormControl('',Validators.required),
    //  })
     
    
  }
  ngOnInit(): void {
    
  }
  t:any;

  proceed() {
    if (this.details.valid) {
      var personDetail = this.details.value
      var info = this.trainservice.selectedDestination.getValue()
      info.person = personDetail
      info.new = true
      this.trainservice.selectDestination(info)
      this.router.navigate(['/payment'])
    } else {
      alert("Invalid Data")
    }
  }

  // public addItem(): void{
  //   this.ListData.push(this.details.value);
  //   this.details.reset()

  // }
  // reset(){
  //   this.details.reset()

  // }
  // removeItem(element: any){
  //   this.ListData.forEach((value: any,index: any) => {
  //     if(value==element)
  //     this.ListData.splice(index,1);
      
  }

  
    // var selectedtrain= this.trainservice.selectedDestination.getValue()
    // this.t = selectedtrain
    // {
    //   "trainId": 3,
    //   "source": "ss",
    //   "trainnumber": 2111,
    //   "trainname": "ss",
    //   "seats": 12,
    //   "departure": "SSA",
    //   "arrival": "DSE",
    //   "journeyday": [
    //     "MON"
    //   ],
    //   "destination": {
    //     "id": 1,
    //     "destination": "CHENNAI",
    //     "image_url": "https://images.unsplash.com/photo-1528035544317-2cd2fab2d213?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871",
    //     "special": "GATEWAY OF SOUTH INDIA",
    //     "about": "Despite being a metropolitan city, Chennai exhibits a perfect amalgamation of art, architecture, dance, music and drama."
    //   },
    //   "trainClasses": [
    //     {
    //       "name": "Second Sitting (2S)",
    //       "fare": 210
    //     },
    //     {
    //       "name": "Sleeper (SL)",
    //       "fare": 355
    //     },
    //     {
    //       "name": "AC 3 Tier (3A)",
    //       "fare": 960
    //     },
    //     {
    //       "name": "AC 2 Tier (2A)",
    //       "fare": 1370
    //     }
    //   ],
    //   "selectedFare": {
    //     "name": "AC 3 Tier (3A)",
    //     "fare": 960
    //   },
    //   person: {}
    // }
  

  




