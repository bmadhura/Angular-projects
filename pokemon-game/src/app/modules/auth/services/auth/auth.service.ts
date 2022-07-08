import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  login() {
    return this.httpClient.post('http://localhost:3000/auth/login', {
      email: 'professor.oak@pokedex.com',
      password: 'pikapi',
    });
  }
}
