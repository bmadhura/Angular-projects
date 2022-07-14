import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import { SharedModule } from '../shared/shared.module';
import { PopupComponent } from './components/popup/popup.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    HomeComponent,
    PopupComponent
  ],
  imports: [
    CommonModule,
    PokemonRoutingModule,
    HttpClientModule,
    MatIconModule,
    MatTableModule,
    SharedModule,
    MatDialogModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatRadioModule,
    NgxPaginationModule
  ],
  providers: []
})
export class PokemonModule { }
