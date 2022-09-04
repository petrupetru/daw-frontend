import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

  transform(value: string): string {
    var eur = Number(value)/5
    return value + "RON (" + eur.toString() + " EUR)";
  }

}
