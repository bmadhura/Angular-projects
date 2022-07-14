import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private router:Router){ }
  token!:string | null;

  ngOnInit(): void {
   this.token =  window.localStorage.getItem('token');
    console.log(this.token);

    if(this.token === 'doctor'){
      this.router.navigateByUrl('doctor');
    }

    if(this.token === 'admin'){
      this.router.navigateByUrl('admin');
    }

    if(this.token === 'nurse'){
      this.router.navigateByUrl('nurse');
    }
  }

}
