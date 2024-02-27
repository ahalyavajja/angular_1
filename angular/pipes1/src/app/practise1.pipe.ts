import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'practise1'
})
export class Practise1Pipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    if(value%2==0){
      return "Even"
    }
    else{
      return "Odd"
    }
  }

}
