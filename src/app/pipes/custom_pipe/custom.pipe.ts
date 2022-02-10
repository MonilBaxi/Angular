import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {
  
  transform(value: number, ...args: number[]): number {
    const [x]=args;
    return value*x;
  }

}
