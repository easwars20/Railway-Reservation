import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { TrainService } from '../train.service';

@Component({
  selector: 'app-masterdatatraindetails',
  templateUrl: './masterdatatraindetails.component.html',
  styleUrls: ['./masterdatatraindetails.component.css']
})
export class MasterdatatraindetailsComponent implements OnInit {

constructor(private trainservice: TrainService, private dataservice: DataserviceService) { }
 
destinations: any = []
trains:any
newtrain:any={}
    
    ngOnInit(): void {
      this.trainservice.getAllTrain().subscribe(
        

        (data: any) => {
          this.trainservice.gettraindestination().subscribe((dest: any) => {
            
            this.destinations = dest;
          })
          console.log(data)
          this.trains = data;
          
  
        },
  
        (err: any) => console.error(err),
  
      );
    
    }
    onFormSubmit(trainform:any){ 
      // {dest: 1} -> {dest: {id: 1}}
      this.newtrain.destination = {
        id: this.newtrain.destination
      };
      this.dataservice.postData(`TrainDetailAll`,this.newtrain)
      this.newtrain={};
    }
    
    delete(train:any){
        this.dataservice.postData(`TrainDetailAll/delete`,train)
    

  }
  
}



  
  
  



  



