import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateModify'
})
export class DateModifyPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    let date = new Date(value);
    return date.toLocaleTimeString();
  }

}
