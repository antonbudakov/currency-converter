import { Component, OnInit } from '@angular/core';
import { CurrenciesService } from './services/currencies.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  first: any;
  second: any;
  rate: number=0;
  title:string='Currency converter';
  currencies:any[]=[];
  form:FormGroup;

  constructor(private currenciesService:CurrenciesService,private formBuilder:FormBuilder){

    this.form=formBuilder.group({  
      currency1:localStorage.getItem('currency1_value')||'EUR',  
      currency2:localStorage.getItem('currency2_value')||'USD',
      sum1:[0,Validators.pattern('^[-+]?([0-9]+\.)?[0-9]+$')],
      sum2:[0,Validators.pattern('^[-+]?([0-9]+\.)?[0-9]+$')]
    });

    currenciesService.get().subscribe(val=>{this.currencies=val;
        this.first=this.currencies.find(x=>x.cc==this.form.value.currency1);  
        this.second=this.currencies.find(x=>x.cc==this.form.value.currency2);
        this.rate=this.first?.rate/this.second?.rate;
    });

    this.form.controls['currency1'].valueChanges.subscribe(val=>{
      this.first=this.currencies.find(x=>x.cc==val);
      localStorage.setItem('currency1_value',val);
      this.calc();
    });

     this.form.controls['currency2'].valueChanges.subscribe(val=>{
      this.second=this.currencies.find(x=>x.cc==val);
      localStorage.setItem('currency2_value',val);
      this.calc();     
     });
  }

  calc(){
    if (this.form.valid)
    {
      this.rate=this.first?.rate/this.second?.rate;
      this.form.controls['sum2'].patchValue(Math.round(this.form.value?.sum1*this.rate*1000)/1000);
    }
  }
  
  firstInput(){  
    if (this.form.valid)
      this.form.controls['sum2'].patchValue(Math.round(this.form.value?.sum1*this.first.rate/this.second.rate*1000)/1000);    
    else
      this.form.controls['sum2'].patchValue(0);
  }

  secondInput(){
    if (this.form.valid)
      this.form.controls['sum1'].patchValue(Math.round(this.form.value?.sum2*this.second.rate/this.first.rate*1000)/1000)
    else
      this.form.controls['sum1'].patchValue(0);
  }

  onChangeClick() {
    let curr=this.form.value.currency1;
    this.form.controls['currency1'].patchValue(this.form.value.currency2);
    this.form.controls['currency2'].patchValue(curr);
  }
}
