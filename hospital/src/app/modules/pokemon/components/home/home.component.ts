import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';
import { IPokemon,IPokeData,ITypes } from 'src/app/app.types';
import { PokeService } from '../../services/poke.service';
import { MatTableDataSource } from '@angular/material/table';
import { ElementRef } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  constructor(public pop:MatDialog, private pokeservice:PokeService) { }


  currentPokemon!:IPokemon;

  pokeData:IPokemon[] = [];

  p: number = 1;
  count: number = 3;

  types:ITypes[] = [
    {
      id: 1,
      name: 'Water',
    },
    {
      id: 2,
      name: 'Fire',
    },
    {
      id: 3,
      name: 'Leaf',
    },
    {
      id: 4,
      name: 'Steel',
    },
  ];
  
  isTable:boolean = false;
  isEditClicked!:boolean;
  isAddClicked!:boolean;

  ngOnInit(): void {
    this.getData();
  }

  displayedColumns: string[] = ['name', 'level', 'type', 'createdOn', 'updatedOn', 'edit', 'delete'];
  dataSource = this.pokeData;

  onClickAdd(){
    // let popAddRef = this.pop.open(PopupComponent);

    // popAddRef.afterClosed().subscribe( () => {
    //   this.getData();
    // }
    // );

    this.isAddClicked = true;
  }

  getData(){
    this.pokeservice.getPokemon().subscribe(response=>{
      this.pokeData = Object(response).data;
      console.log(response);
      console.log(this.pokeData);
    })
  }

  onClickUpdate(editPokemon:IPokemon){

    // let popEditRef =  this.pop.open(PopupComponent);
    
    // popEditRef.afterClosed().subscribe(()=>{
    //     this.getData();
    //   })

    this.isEditClicked = true;
    this.currentPokemon = editPokemon;
       
  }

    addUpdate(newPokemon:IPokemon){
      if(this.isAddClicked){
        this.pokeservice.createPokemon(newPokemon).subscribe((res) => {
          console.log(res);
        });

        this.isAddClicked = false;
      }
      
      if(this.isEditClicked){
        this.currentPokemon.name = newPokemon.name;
        this.currentPokemon.level = newPokemon.level;
        this.currentPokemon.type = newPokemon.type;

        console.log(this.currentPokemon.type);
        
        this.pokeservice.updatePokemon(this.currentPokemon).subscribe((res)=>{
          console.log(res);
        })

        this.isEditClicked = false;
      }

      this.getData();
    }


  onClickDelete(id:any){
    this.pokeservice.deletePokemon(id).subscribe((response)=>{
      console.log(response);
    });
    console.log(id);
    this.getData();
  }
}
