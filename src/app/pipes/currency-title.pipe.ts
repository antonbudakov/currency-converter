import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyTitle'
})
export class CurrencyTitlePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return ((args?.[0]+' ')||'')+value||' ';
  }

}