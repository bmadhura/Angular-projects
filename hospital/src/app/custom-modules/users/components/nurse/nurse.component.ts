import { Component, OnInit } from '@angular/core';
import { userDatas } from 'mock-backend/backend';
import { IUser } from 'src/app/models/app.types';

@Component({
  selector: 'app-nurse',
  templateUrl: './nurse.component.html',
  styleUrls: ['./nurse.component.scss']
})
export class NurseComponent implements OnInit {

  constructor() { }

  doctorId!:number;
  docData:IUser[] = [];

  ngOnInit(): void {
    this.doctorId = Number(window.localStorage.getItem('userId'));
    console.log(this.doctorId);
    
    userDatas.forEach((user)=>{
      if(user.id === this.doctorId){
        this.docData.push(user)
      }
    })

    console.log(this.docData);
  }

  isHomeClicked:boolean = false;

  onClickHome(){
    this.isHomeClicked = true;
  }

}
