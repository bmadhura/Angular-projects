import { Component, OnInit } from '@angular/core';
import { userDatas } from 'mock-backend/backend';
import { IUser } from 'src/app/models/app.types';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent implements OnInit {

  constructor() { }

  nurseData:IUser[] = [];
  doctorId!:Number;

  ngOnInit(): void {
    this.doctorId = Number(window.localStorage.getItem('userId'));
    console.log(this.doctorId);
    
    userDatas.forEach((user)=>{
      if(user.report === this.doctorId){
        this.nurseData.push(user)
      }
    })

    console.log(this.nurseData);
  }

  isHomeClicked:boolean = false;
  isMsgClicked:boolean = false;

  isReqClicked:boolean = false;

  onClickHome(){
    this.isHomeClicked = true;
    this.isMsgClicked = false;
  }

  onClickMsg(){
    this.isMsgClicked = true;
    this.isHomeClicked = false;
  }

  onClickReq(){
    this.isReqClicked = true;
  }

  getRequest(req:any){
    
  }

}
