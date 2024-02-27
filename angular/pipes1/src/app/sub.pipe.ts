import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sub'
})
export class SubPipe implements PipeTransform {

  transform(value: string, val1:number,val2: number): unknown {
    return value.substring;
  }

}
