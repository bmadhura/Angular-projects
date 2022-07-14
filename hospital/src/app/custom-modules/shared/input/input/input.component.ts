import { Component, OnInit,Input,forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  providers: [     
    {       provide: NG_VALUE_ACCESSOR, 
            useExisting: forwardRef(() => InputComponent),
            multi: true,     
    }
  ],
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit, ControlValueAccessor {

  field = "";

  @Input() type : string = "";
  @Input() placeholder: string ="";

  constructor() { }

  ngOnInit(): void {
  }

  onChange = (value:any) => {}
  onTouch = () => {}

  set value(val: string){
    this.field = val
    this.onChange(val)
    this.onTouch()
  }

  writeValue(obj: any) {
    this.value = obj;
  }
  registerOnChange(fn: any) {
    this.onChange = fn
  }

  registerOnTouched(fn: any){
    this.onTouch = fn;
  }


}
