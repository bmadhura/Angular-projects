import { Component, OnInit } from '@angular/core';
import { userDatas } from 'mock-backend/backend';
import { IUser } from 'src/app/models/app.types';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor() { }

  docLabel:string = "Add doctor"
  nurseLabel:string ="Add nurses"

  doctorData:IUser[]=[];
  isDocClicked:boolean = false;

  nurseData:IUser[] = [];
  isNurseClicked:boolean = false;

  isAddClicked:boolean = false;
  isEditClicked:boolean = false;

  isRequestClicked:boolean = false;

  isNotifyClicked:boolean = false;

  ngOnInit(): void {
    userDatas.forEach((user)=>{
      if(user.role==='doctor'){
        this.doctorData.push(user);
      }
    })

    userDatas.forEach((user)=>{
      if(user.role==='nurse'){
        this.nurseData.push(user);
      }

      userDatas.forEach((person)=>{
        if(user.report === person.id){
          user.report = person.name;
        }
      })
    })

    console.log(this.doctorData);
    console.log(this.nurseData);
    
  }


  onClickDoc(){
    this.isDocClicked = true;
    this.isNurseClicked = false;
    this.isRequestClicked = false;
    this.isNotifyClicked = false;
  }

  onClickNurse(){
    this.isDocClicked = false;
    this.isNurseClicked = true;
    this.isRequestClicked = false;
    this.isNotifyClicked = false;
  }

  onClickAdd(){
    this.isAddClicked = true;
    this.isEditClicked = false;
  }

  onClickEdit(){
    this.isEditClicked = true;
    this.isAddClicked = false;
  }

  onClickRequest(){
    this.isRequestClicked = true;
    this.isDocClicked = false;
    this.isNurseClicked = false;
    this.isNotifyClicked = false;
  }

  onClickNotify(){
    this.isNotifyClicked = true;
    this.isDocClicked = false;
    this.isNurseClicked = false;
    this.isRequestClicked = false;
  }

}
