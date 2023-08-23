import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyTitle'
})
export class CurrencyTitlePipe implements PipeTransform {

  transform(value: string|null): unknown {
    return value?.slice(0,3)+' '+value?.slice(3);
  }

}