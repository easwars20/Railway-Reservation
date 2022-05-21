import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrainService {
  destinations=[{
    destination:"CHENNAI", 
    img_url:"https://images.unsplash.com/photo-1528035544317-2cd2fab2d213?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871",   
    special:"GATEWAY OF SOUTH INDIA",
    about:"Despite being a metropolitan city, Chennai exhibits a perfect amalgamation of art, architecture, dance, music and drama.",
    source:"NAGERCOIL",
    trainNumber:12668,
    trainName: "NCJ MS EXPRESS",
    seats:45,
    departure:"16:15",
    arrival:"04:35",
    journeyDay:["Sun","Mon", "Tue","Wed","Thu","Fri","Sat"],
    trainClasses:["Second Sitting (2S)", "Sleeper (SL)","AC 3 Tier (3A)","AC 2 Tier (2A)"],
    trainFares:[0, 1,3]
    },  
    {
    destination:"KERALA", 
    img_url:"https://images.unsplash.com/photo-1593693397690-362cb9666fc2?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869",        
    special:"GOD'S OWN COUNTRY", 
    about:"Named as one of the ten paradises of the world, Kerala is famous especially for its ecotourism initiatives and beautiful backwaters.",
    source:"NAGERCOIL",
    trainNumber:17236,
    trainName: "ERNAD EXPRESS",
    seats:45,
    departure:"02:00",
    arrival:"06:15",
    journeyDay:["Sun","Mon", "Tue","Wed","Thu","Fri","Sat"],
    trainClasses:["Second Sitting (2S)", "AC Chair Car (CC)"],
    trainFares:[0, 1,3]
    }, 
    { 
    destination:"BANGLORE",     
    img_url:"https://images.unsplash.com/photo-1444723121867-7a241cacace9?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870", 
    special:"SILICON VALLEY OF INDIA",
    about:"Bangalore is widely regarded as the IT capital of India because of its role as the nation's leading information technology exporter.",
    source:"NAGERCOIL",
    trainNumber:44553,
    trainName: "NCJ SBC EXPRESS",
    seats:45,
    departure:"19:10",
    arrival:"10:45",
    journeyDay:["Sun","Mon", "Tue","Wed","Thu","Fri","Sat"],
    trainClasses:["Second Sitting (2S)", "Sleeper (SL)","AC 3 Tier (3A)","AC 2 Tier (2A)"],
    trainFares:[0, 1,3]
    
    },  
    {   
    destination:"NEW DELHI",  
    img_url:"https://images.unsplash.com/photo-1515091943-9d5c0ad475af?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435", 
    special:"CITY OF RALLIES", 
    about:"According to legend, the city was named for Raja Dhilu, a king who reigned in the region in the 1st century bce.",
    source:"NAGERCOIL",
    trainNumber:12668,
    trainName: "NZM CAPE SF EXPRESS",
    seats:45,
    departure:"16:15",
    arrival:"04:35",
    journeyDay:["Sun","Mon", "Tue","Wed","Thu","Fri","Sat"],
    trainClasses:["Second Sitting (2S)", "Sleeper (SL)","AC 3 Tier (3A)","AC 2 Tier (2A)"],
    trainFares:[0, 1,3]
    }  
    ]


  classList = [
    { id: 0, className: 'All Classes' },
    { id: 1, className: 'Second Sitting (2S)' },
    { id: 2, className: 'Sleeper (SL)' },
    { id: 3, className: 'AC Chair Car (CC)' },
    { id: 4, className: 'AC 3 Tier (3A)' },
    { id: 5, className: 'AC 2 Tier (2A)' },
    { id: 6, className: 'AC First Class (1A)' }
];

dayList = [
    { id: 0, dayValue: 'SUN' },
    { id: 1, dayValue: 'MON' },
    { id: 2, dayValue: 'TUE' },
    { id: 3, dayValue: 'WED' },
    { id: 4, dayValue: 'THU' },
    { id: 5, dayValue: 'FRI' },
    { id: 6, dayValue: 'SAT' },
];

preferenceList = [
    { id: 0, name: 'Upper' },
    { id: 1, name: 'Middle' },
    { id: 2, name: 'Lower' },
    { id: 3, name: 'Side Upper' },
    { id: 4, name: 'Side Lower' },
];

genderList = [
    { id: 0, name: 'Male' },
    { id: 1, name: 'Female' },
    { id: 2, name: 'Other' }
];
// trains = [
//   new Train(16128, 'GUV CHN EXP', this.destinations[0], this.destinations[1], [
//       this.classList[1], this.classList[2], this.classList[4], this.classList[5]
//   ], [
//       this.dayList[0], this.dayList[1], this.dayList[2], this.dayList[3], this.dayList[4], this.dayList[5], this.dayList[6]
//   ], '08:00', '20:35', 45, [
//       210, 355, 960, 1370
//   ]),

//   new Train(12668, 'NCJ MS EXPRESS', this.destinations[0], this.destinations[1], [
//     this.dayList[0], this.dayList[1], this.dayList[2], this.dayList[3], this.dayList[4], this.dayList[5], this.dayList[6]
//   ], [
//       this.dayList[5]
//   ], '16:15', '04:35', 50, [
//       250, 385, 1005, 1415
//   ]),

//   new Train(17236, 'ERNAD EXPRESS', this.destinations[0], this.destinations[2], [
//       this.classList[1], this.classList[3]
//   ], [
//     this.dayList[0], this.dayList[1], this.dayList[2], this.dayList[3], this.dayList[4], this.dayList[5], this.dayList[6]
//   ], '02:00', '6:15', 30, [
//       90, 330
//   ]),

//   new Train(16525, 'TEN BSP EXPRESS', this.destinations[0], this.destinations[2], [
//       this.classList[1], this.classList[2], this.classList[4],this.classList[5]
//   ], [
//       this.dayList[6]
//   ], '02:25', '06:57', 80, [
//       115, 195, 555, 760
//   ]),

//   new Train(44553, 'NCJ SBC EXPRESS', this.destinations[0], this.destinations[3], [
//       this.classList[1], this.classList[4], this.classList[4], this.classList[5]
//   ], [
//       this.dayList[0], this.dayList[1], this.dayList[2], this.dayList[3],this.dayList[4], this.dayList[5], this.dayList[6]
//   ], '19:10', '10:45', 70, [
//       650, 750, 950, 1300
//   ])
// ];
// }


  constructor() { }

  public selectedDestination: BehaviorSubject<any>=new BehaviorSubject<any>([]);

  getdestinations(){
    return this.destinations
  }

  selectDestination(train:any){
    this.selectedDestination.next(train)
  }
}
