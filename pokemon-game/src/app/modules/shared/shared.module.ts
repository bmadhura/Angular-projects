import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { InputFieldsComponent } from './input-fields/input-fields.component';
import { InvertDirective } from './directives/invert/invert.directive';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    ButtonComponent,
    InputFieldsComponent,
    InvertDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
  exports:[
    InputFieldsComponent,
    ButtonComponent,
    InvertDirective,
  ]
})
export class SharedModule { }
