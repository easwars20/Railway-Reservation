import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TrainService } from './train.service';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

public enrollments:BehaviorSubject<any>=new BehaviorSubject<any>([]);

enroll(scourse:any){
  var enrollment={
    course:scourse
  }
  var enrollmentsTemp=this.enrollments.getValue();
  enrollmentsTemp.push(enrollment);

  this.enrollments.next(enrollmentsTemp);
  console.log(this.enrollments.getValue());
}

  constructor(private trainService: TrainService) { }
}
