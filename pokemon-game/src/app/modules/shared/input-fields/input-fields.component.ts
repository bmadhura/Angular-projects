import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input-fields',
  templateUrl: './input-fields.component.html',
  providers: [     
    {       provide: NG_VALUE_ACCESSOR, 
            useExisting: forwardRef(() => InputFieldsComponent),
            multi: true,     
    }
  ],
  styleUrls: ['./input-fields.component.scss']
})
export class InputFieldsComponent implements OnInit, ControlValueAccessor {

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
