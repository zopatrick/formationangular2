import { Pipe, PipeTransform } from '@angular/core';

/* Decorator utilisé dans le html ou ts */
@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {
  // Fonction de transform
  transform(value: any, arg?: any): any {
    if (value) {
      console.log(value);
      if (arg) {
        return value.totalTtc(arg);
      }
      return value.totalHt();
    }
    return null;
  }
}
