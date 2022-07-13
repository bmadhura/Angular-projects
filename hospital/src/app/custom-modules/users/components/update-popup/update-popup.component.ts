import { Component, OnInit, Input } from '@angular/core';
import { FormGroup,FormControlName, FormControl,Validators } from '@angular/forms';
import { IUser } from 'src/app/models/app.types';

@Component({
  selector: 'app-update-popup',
  templateUrl: './update-popup.component.html',
  styleUrls: ['./update-popup.component.scss']
})
export class UpdatePopupComponent implements OnInit {

  text = 'text';
  name = 'name';
  email = 'email';

  @Input() dropDownData:IUser[] = [];
  @Input() dropDownLabel:string = "";



  constructor() { }

  ngOnInit(): void {
    this.dropDownData.forEach((user,index)=>{
      if(user.report!=undefined){
          this.dropDownData.splice(index,1);
      }
    })

    console.log(this.dropDownData);
  }

  updateForm = new FormGroup({
    name:new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required,Validators.email])
  })

  get Email(){
    return this.updateForm.get('email');
  }

  get Name(){
    return this.updateForm.get('name');
  }

  onSubmit(){
    console.log(this.updateForm.value);
  }

}
