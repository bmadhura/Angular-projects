import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormControlName, Validator, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { Router, Route } from '@angular/router';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email = 'email';
  password = 'password';
  token: string = "";

  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit(): void {
  }

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
    this.auth.login().subscribe(response =>{
      this.token = Object(response).data.token,
      localStorage.setItem('token',this.token);
      console.log(this.token);
    })

    if(localStorage.getItem('token')){
    this.router.navigateByUrl('/home');
  }
  }

}
