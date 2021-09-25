import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stateCode'
})
export class StateCodePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
