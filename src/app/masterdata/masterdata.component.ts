import { Component, OnInit } from '@angular/core';
import { TrainService } from '../train.service';
import { DataserviceService } from '../dataservice.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-masterdata',
  templateUrl: './masterdata.component.html',
  styleUrls: ['./masterdata.component.css']
})
export class MasterdataComponent implements OnInit {

destinations!:any[]
newdestination:any={}
editeddestination: any={};

constructor(private trainservice: TrainService, private dataservice: DataserviceService) { }


 
settraindestination(data: any) {
          
        this.destinations = data

  }

gettraindestination() {

    this.trainservice.gettraindestination().subscribe(

      (data: any) => {
        console.log(data)
        this.settraindestination(data);

        console.log(this.destinations);

      },

      (err: any) => console.error(err),

    );
  }

  editdestinationForm=new FormGroup({

    id:         new FormControl(),
    destination:new FormControl(),
    image_url : new FormControl(),
    special:    new FormControl(),
    about:      new FormControl(),
  })

  onEdit(){
    this.editeddestination.id = this.editdestinationForm.controls['id'].value
    this.editeddestination.destination = this.editdestinationForm.controls['destination'].value
    this.editeddestination.image_url = this.editdestinationForm.controls['image_url'].value
    this.editeddestination.special = this.editdestinationForm.controls['special'].value
    this.editeddestination.about = this.editdestinationForm.controls['about'].value
    console.log(this.editeddestination);

 this.dataservice.postData(`Destination/edit`,this.editeddestination);

    this.editeddestination={};
  }
  editdestination(destination:any){
    this.editdestinationForm.controls['id'].setValue(destination.id),
    this.editdestinationForm.controls['destination'].setValue(destination.destination),
    this.editdestinationForm.controls['image_url'].setValue(destination.image_url),
    this.editdestinationForm.controls['special'].setValue(destination.special),
    this.editdestinationForm.controls['about'].setValue(destination.about)
  }

  ngOnInit(): void {
   this.gettraindestination()
   
  }

    onFormSubmit(destinationform:any){
      this.dataservice.postData(`Destination`,this.newdestination)
      this.newdestination={};
    }
  
    delete(destinations:any){
      this.dataservice.postData(`Destination/delete`,destinations)
      }

  }

