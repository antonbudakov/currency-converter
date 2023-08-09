import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrenciesService {

  constructor(private http:HttpClient) { }

  get(){
    return this.http.get<any[]>('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json');
  }
}
