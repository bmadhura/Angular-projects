import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { PokeService } from '../../services/poke.service';
import {
  FormGroup,
  FormControl,
  FormControlName,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { IPokemon,IPokeData,ITypes } from 'src/app/app.types';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
})
export class PopupComponent implements OnInit {
  constructor(private poke: PokeService, public fb: FormBuilder, private popref:MatDialog) {}
  @Output() emitter =  new EventEmitter();

  pokemon!:IPokemon;
  isCloseClicked:boolean = false;
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

  popForm = new FormGroup({
    pokeName: new FormControl('', [Validators.required]),
    pokeLevel: new FormControl('', [Validators.required]),
    pokeType: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {}

  text = 'text';
  name = 'Name of Pokemon';
  level = 'Level';

  isSelected:boolean = false;

  onSubmit() {
    console.log(this.popForm.value);
    this.pokemon = {
      name: this.popForm.value.pokeName,
      level: Number(this.popForm.value.pokeLevel),
      type: Object(this.popForm.value.pokeType),
      isSelected : Boolean(this.isSelected),
    }

    this.emitter.emit(this.pokemon);
  }

  

  onClickClose(){
    // this.popref.closeAll();
    this.isCloseClicked = true;
  }
}
