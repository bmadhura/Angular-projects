import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokeService {

  constructor(private http:HttpClient) { }
  baseUrl: string = "http://localhost:3000/";

  getPokemons(){
    return this.http.get(this.baseUrl);
  }

  createPokemon(){

  }

  updatePokemon(){

  }

  deletePokemon(){

  }

  getTypes(){

  }



}
