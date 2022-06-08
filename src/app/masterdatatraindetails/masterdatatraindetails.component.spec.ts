import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterdatatraindetailsComponent } from './masterdatatraindetails.component';

describe('MasterdatatraindetailsComponent', () => {
  let component: MasterdatatraindetailsComponent;
  let fixture: ComponentFixture<MasterdatatraindetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterdatatraindetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterdatatraindetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
