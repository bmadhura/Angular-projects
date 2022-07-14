import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITypes } from 'src/app/app.types';
import { IPokemon } from 'src/app/app.types';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokeService {

  constructor(private http:HttpClient) { }

  baseUrl: string = "http://localhost:3000/";

  httpHeader = {
    headers: new HttpHeaders({
      'Authorization' : this.getAuthToken() || "",
    }),
  };

  getAuthToken() {
    return window.localStorage.getItem('token');
  }


  createPokemon(pokemon:IPokemon){
    return this.http.post(`${this.baseUrl}pokemon`,pokemon);
  }


  getPokemon(){
    return this.http.get(`${this.baseUrl}pokemon`);
  }

  deletePokemon(id:any){
    return this.http.delete(`${this.baseUrl}pokemon/${id}`);
  }

  updatePokemon(pokemon:IPokemon){
    return this.http.put(`${this.baseUrl}pokemon`,pokemon);
  }
}


