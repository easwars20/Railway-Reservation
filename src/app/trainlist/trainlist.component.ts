import { Component, OnInit } from '@angular/core';
import { TrainService } from '../train.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trainlist',
  templateUrl: './trainlist.component.html',
  styleUrls: ['./trainlist.component.css']
})
export class TrainlistComponent implements OnInit {


  constructor(private trainservice: TrainService, private router:Router) { }

  settraindetail(data:any, selectedtrain:any){
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

    selectTrain(trainIndex:any){
      var selectedTrain: any;
      // for(var idx = 0; idx < this.t.trains.length; idx ++) {
      //   var train = this.t.trains[idx];
      //   if (trainIndex === idx) {
      //     selectedTrain = train;
      //   }
      // }
      this.t.trains.forEach((train: any, idx: any) => {
        if (trainIndex === idx) {
          selectedTrain = train;
        }
      })
      var selectedFare = this.selectedFare[trainIndex]
      selectedTrain.selectedFare = selectedFare;
      this.trainservice.selectDestination(selectedTrain)
      this.router.navigate(['/passenger'])
    }
    
    gettraindestination(){
    
      var selectedtrain= this.trainservice.selectedDestination.getValue()
      if (!selectedtrain || selectedtrain.length === 0) {
        this.router.navigate(['/'])
      }
    this.trainservice.gettraindetails(selectedtrain.id).subscribe(
    
    (data: any) => {
    this.settraindetail(data,selectedtrain);
    

    
    },
    
      (      err: any) => console.error(err),
    
    );
    
    }
  selectedFare: any = []
  newFare: any = []
  today: string = ""
  selectedDate: string = ""

  j: any
  t: any

  formatDate(d: Date) {
    var month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;

    return year + '-' + month + '-' + day;
  }


  changeDate(e: any) {
    this.selectedDate = e.target.value
    
  }

  ngOnInit(): void {

    this.gettraindestination()

    // this.trainservice.selectedDestination.subscribe((data) => {
    //   this.t = data;
    
    var day = new Date();
     
    this.today = this.formatDate(day)
    this.selectedDate = this.today
     
    //   this.newFare = []
    //   for (var i = 0; i < this.t.trains.length; i++) {
    //     var train = this.t.trains[i];
    
    //       this.newFare.push(train.trainClasses[0].fare)
    //   }
     
    //});
  }


  bookTicket(item: any) { }

  getFare(e: any, k: number) {
    var idx = Number(e.target.value)
    this.newFare[k] = this.t.trains[k].trainClasses[idx].fare
    this.selectedFare[k] = this.t.trains[k].trainClasses[idx]
  }
}
