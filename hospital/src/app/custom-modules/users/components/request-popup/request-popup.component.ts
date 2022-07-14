import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { IUser } from 'src/app/models/app.types';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { userDatas } from 'mock-backend/backend';

@Component({
  selector: 'app-request-popup',
  templateUrl: './request-popup.component.html',
  styleUrls: ['./request-popup.component.scss']
})
export class RequestPopupComponent implements OnInit {

  constructor() { }

  replaceNurses: IUser[] = [];
  @Output() reqEmitter = new EventEmitter();

  ngOnInit(): void {
    userDatas.forEach((user)=>{
      if(user.role==='nurse' && user.report === undefined){
        this.replaceNurses.push(user);
      }
    })

    console.log(this.replaceNurses);
    
  }

  
  reqForm = new FormGroup({
    reason: new FormControl('',[Validators.required]),
    replace: new FormControl('',[Validators.required])
  })

  onSubmitreq(){
    console.log(this.reqForm.value);
    
    this.reqEmitter.emit(this.reqForm.value);
  }

}
