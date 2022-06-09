import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DataserviceService } from './dataservice.service';

@Injectable({
  providedIn: 'root'
})
export class TrainService {
  private destinations = [{
    id:1,
    destination: "CHENNAI",
    image_url: "https://images.unsplash.com/photo-1528035544317-2cd2fab2d213?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871",
    special: "GATEWAY OF SOUTH INDIA",
    about: "Despite being a metropolitan city, Chennai exhibits a perfect amalgamation of art, architecture, dance, music and drama.",
    
    trains: [{
      trainId:1,
      source: "NAGERCOIL",
      trainnumber: 16128,
      trainname: "GUV CHENNAI EXP",
      seats: 45,
      departure: "08:00",
      arrival: "20:35",
      journeyday: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      trainClasses: [
        { name: "Second Sitting (2S)", fare: 210 }, 
        { name: "Sleeper (SL)", fare: 355 }, 
        { name: "AC 3 Tier (3A)", fare: 960 },
        { name: "AC 2 Tier (2A)", fare: 1370 }
      ],

    }, {
      trainId:2,
      trainnumber: 12668,
      trainname: "NCJ MS EXPRESS",
      seats: 45,
      departure: "16:15",
      arrival: "04:35",
      journeyday: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      trainClasses: [
        { name: "Second Sitting (2S)", fare: 250 },
        { name: "Sleeper (SL)", fare: 425 },
        { name: "AC 3 Tier (3A)", fare: 1110 },
        { name: "AC 2 Tier (2A)", fare: 1565 }
      ]
    }
    ],


  },
  {
    id:2,
    destination: "KERALA",
    image_url: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869",
    special: "GOD'S OWN COUNTRY",
    about: "Named as one of the ten paradises of the world, Kerala is famous especially for its ecotourism initiatives and beautiful backwaters.",
    
    trains: [{
      trainId:3,
      source: "NAGERCOIL",
      trainnumber: 16606,
      trainname: "ERNAD EXPRESS",
      seats: 70,
      departure: "02:00",
      arrival: "06:15",
      journeyday: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      trainClasses: [
        { name: "Second Sitting (2S)", fare: 90 },
        { name: "Chair Car (CC)", fare: 330 },
      ],

    }, {
      trainId:4,
      trainnumber: 19557,
      trainname: "TEN JAM EXPRESS",
      seats: 15,
      departure: "09:27",
      arrival: "13:25",
      journeyday: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      trainClasses: [
        { name: "Second Sitting (2S)", fare: 90 },
        { name: "Sleeper (SL)", fare: 150 },  
        { name: "AC 3 Tier (3A)", fare: 460 }, 
        { name: "AC 2 Tier (2A)", fare: 645 }  
      ]
    }
    ],
  },
  {
    id:3,
    destination: "BANGLORE",
    image_url: "https://images.unsplash.com/photo-1444723121867-7a241cacace9?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870",
    special: "SILICON VALLEY OF INDIA",
    about: "Bangalore is widely regarded as the IT capital of India because of its role as the nation's leading information technology exporter.",
    
    trains: [{
      trainId:5,
      source: "NAGERCOIL",
      trainnumber: 16525,
      trainname: "CAPE SBC EXPRESS",
      seats: 30,
      departure: "10:30",
      arrival: "06:40",
      journeyday: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      trainClasses: [
        { name: "Second Sitting (2S)", fare: 250 },
        { name: "Sleeper (SL)", fare: 415 },
        { name: "AC 3 Tier (3A)", fare: 1120 },
        { name: "AC 2 Tier (2A)", fare: 1605 },
        { name: "AC 1 Tier (1A)", fare: 2700 }
      ],

    }, {
      trainId:6,
      trainnumber: 17236,
      trainname: "NCJ SBC EXPRESS",
      seats: 45,
      departure: "19:10",
      arrival: "09:20",
      journeyday: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      trainClasses: [
        { name: "Second Sitting (2S)", fare: 220 },
        { name: "Sleeper (SL)", fare: 375 },
        { name: "AC 3 Tier (3A)", fare: 1110 },
        { name: "AC 2 Tier (2A)", fare: 1440 }
      ]
    }
    ],
  },
  {
    id:4,
    destination: "NEW DELHI",
    image_url: "https://images.unsplash.com/photo-1515091943-9d5c0ad475af?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435",
    special: "CITY OF RALLIES",
    about: "According to legend, the city was named for Raja Dhilu, a king who reigned in the region in the 1st century bce.",
    
    trains: [{
      trainId:7,
      source: "NAGERCOIL",
      trainnumber: 16525,
      trainname: "NZM CAPE SF EXPRESS",
      seats: 50,
      departure: "19:25",
      arrival: "18:35",
      journeyday: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      trainClasses: [
        { name: "Second Sitting (2S)", fare: 595 },
        { name: "Sleeper (SL)", fare: 960 },
        { name: "AC 3 Tier (3A)", fare: 2465 },
        { name: "AC 2 Tier (2A)", fare: 3605 },
      ]
    }]}]


  constructor(private dataserviceservice:DataserviceService) { }
    gettraindestination(){

      return this.dataserviceservice.getData(`Destination`);
      
      
      }
      gettraindetails(id: any){
        // query params
        return this.dataserviceservice.getData('TrainDetail?destination=' + id);
      }
      getAllTrain() {
        return this.dataserviceservice.getData('TrainDetailAll');
      }
  

  public selectedDestination: BehaviorSubject<any> = new BehaviorSubject<any>([]);

  getdestinations() {
    return this.destinations
  }

  selectDestination(data: any) {
    this.selectedDestination.next(data)
   
  }
}
