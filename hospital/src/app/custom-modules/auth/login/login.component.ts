import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControlName, Validators,FormControl } from '@angular/forms';
import { ILoginData } from 'src/app/models/app.types';
import { userDatas
 } from 'mock-backend/backend';

 import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  loginData!:ILoginData;
  token!:string;

  email = "email";
  password = "password";

  loginForm = new FormGroup(
    {
      email: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('',[Validators.required, Validators.minLength(4)]),
    }
  )

  get Email(){
    return this.loginForm.get('email');
  }

  get Password(){
    return this.loginForm.get('password');
  }

  onSubmit(){

    this.loginData = {
      email: String(this.loginForm.value.email),
      password: String(this.loginForm.value.password)
    }

    userDatas.forEach((user) => {
      if(user.email === this.loginData.email && user.password === this.loginData.password){
        alert("Login successful!");
        window.localStorage.setItem('token',user.role);
        
        if(user.role==='doctor') window.localStorage.setItem('userId',String(user.id));

        if(user.role==='nurse') window.localStorage.setItem('userId',String(user.report));

        this.router.navigateByUrl('/home');
      }
    })

  }
}

