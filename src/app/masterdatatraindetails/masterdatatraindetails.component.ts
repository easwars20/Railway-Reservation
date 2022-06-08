import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataserviceService } from '../dataservice.service';
import { TrainService } from '../train.service';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-masterdatatraindetails',
  templateUrl: './masterdatatraindetails.component.html',
  styleUrls: ['./masterdatatraindetails.component.css']
})
export class MasterdatatraindetailsComponent implements OnInit {

  constructor(private trainservice: TrainService, private dataservice: DataserviceService, private router:Router) { }
 
 trains!:any[]
  t:any
  tr:any
  selectedFare:any=[]
  newFare:any=[]
  newtrain:any={}
    
  settraindetail(data:any, selectedtrain:any){
    debugger
    this.newFare=[];
    this.selectedFare=[];
    for(var i=0;i<data.length;i++){
      data[i].journeyday=data[i].journeyday.split(',')
      data[i].trainClasses= [
        { name: "Second Sitting (2S)", fare: 210 },
        { name: "Sleeper (SL)", fare: 355 },
        { name: "AC 3 Tier (3A)", fare: 960 },
        { name: "AC 2 Tier (2A)", fare: 1370 }
      ];
      this.selectedFare.push(data[i].trainClasses[0])
      this.newFare.push(data[i].trainClasses[0].fare)
    }
    selectedtrain.trains=data
    this.t=selectedtrain

    //this.destinations = data
    
    }
    ngOnInit(): void {
      this.trainservice.getAllTrain().subscribe(

        (data: any) => {
          console.log(data)
          this.t = data;
  
        },
  
        (err: any) => console.error(err),
  
      );
    
    }
    onFormSubmit(trainform:any){
      this.dataservice.postData(`TrainDetailAll`,this.newtrain)
      this.newtrain={};
    }
    
    delete(t:any){
      debugger
        this.dataservice.postData(`TrainDetailAll/delete`,t)
    

  }
}



  
  
  



  



