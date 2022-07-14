import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { ILoginData } from 'src/app/app.types';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}
  baseUrl: string = "http://localhost:3000/";

  login(data:ILoginData) {
    return this.httpClient.post(`${this.baseUrl}auth/login`, data, this.httpHeader);
  }

  httpHeader = {
    headers: new HttpHeaders({
      'Authorization' : this.getAuthToken() || "",
    }),
  };

  getAuthToken() {
    return localStorage.getItem('token');
  }

  // get(){
  //   return this.httpClient.get(`${environment.baseUrl}pokemon`,this.httpHeader)
  // }
}
