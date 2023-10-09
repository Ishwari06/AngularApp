import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'count'
})
export class CountPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    // debugger
    // return null;
    return value.toString().length
  }

}
