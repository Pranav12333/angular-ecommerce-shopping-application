import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rupees'
})
export class RupeesPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    // Convert the value to Indian Rupees format (e.g., 1234.56 -> ₹1,234.56)
    const formattedValue = `₹${value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`;
    return formattedValue;
  }

}
