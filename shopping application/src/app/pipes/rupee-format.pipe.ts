import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rupeeFormat'
})  
export class RupeeFormatPipe implements PipeTransform {

  transform(value: number) {
    const rupeesValue = value * 2;
    return `₹${rupeesValue.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`;
  }

}
