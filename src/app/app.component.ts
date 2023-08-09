import { Component } from '@angular/core';
import { CurrenciesService } from './services/currencies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  first: number=Number(localStorage.getItem('currency1_value'));
  second: number=Number(localStorage.getItem('currency2_value'));
  title:string='Currency converter';
  index_from=0;
  index_to=1;
  currencies:any[]=[];

  constructor(currenciesService:CurrenciesService){
    currenciesService.get().subscribe(val=>this.currencies=val);
  }
  
  firstInput(event:any){  
    this.first=event.target.value;
    this.second=this.first*this.currencies[this.index_from].rate/this.currencies[this.index_to].rate;
    localStorage.setItem('currency2_value',this.second?.toString());
    localStorage.setItem('currency1_value',this.first?.toString());
    console.log('Currency1',this.first);
  }

  secondInput(event:any){
    this.second=event.target.value;
    this.first=this.second*this.currencies[this.index_to].rate/this.currencies[this.index_from].rate;
    localStorage.setItem('currency2_value',this.second?.toString());
    localStorage.setItem('currency1_value',this.first?.toString());
    console.log('Currency2',this.second);
  }
}
