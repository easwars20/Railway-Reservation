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
   
    
  }
  ngOnInit(): void {
    
  }
  t:any;

  proceed() {
    if (this.details.valid) {
      var personDetail = this.details.value
      var info = this.trainservice.selectedDestination.getValue()
      debugger
      info.person = personDetail
      this.trainservice.selectDestination(info)
      this.router.navigate(['/payment'])
    } else {
      alert("Invalid Data")
    }
  }
}
  

  




