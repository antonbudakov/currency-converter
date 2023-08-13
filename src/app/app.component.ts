import { Component, OnInit } from '@angular/core';
import { CurrenciesService } from './services/currencies.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
onChangeClick() {
  let curr=this.form.value.currency1;
  this.form.controls['currency1'].patchValue(this.form.value.currency2);
  this.form.controls['currency2'].patchValue(curr);
}
  first: number=Number(localStorage.getItem('currency1_value'));
  second: number=Number(localStorage.getItem('currency2_value'));
  title:string='Currency converter';
  index_from=0;
  index_to=1;
  currencies:any[]=[];
  form:FormGroup;

  constructor(private currenciesService:CurrenciesService,private formBuilder:FormBuilder){
    currenciesService.get().subscribe(val=>this.currencies=val);

    this.form=formBuilder.group({
      currency1:null,
      currency2:null,
      sum1:0,
      sum2:0
    });

    
  }

  ngOnInit(): void {

     this.form.controls['currency1'].valueChanges.subscribe(x=>{

      this.form.controls['sum2'].patchValue(this.form.value?.sum1*x/this.form.value?.currency2);
      localStorage.setItem('currency2_value',this.second?.toString());
      localStorage.setItem('currency1_value',this.first?.toString());
      
    });

     this.form.controls['currency2'].valueChanges.subscribe(x=>{
      
      this.form.controls['sum2'].patchValue(this.form.value?.sum1*this.form.value?.currency1/x);
      localStorage.setItem('currency2_value',this.second?.toString());
      localStorage.setItem('currency1_value',this.first?.toString());
     });
  }
  
  firstInput(){  
    this.first=this.form.value?.sum1;
    //this.second=this.first*this.currencies[this.index_from].rate/this.currencies[this.index_to].rate;
    this.form.controls['sum2'].patchValue(this.form.value?.sum1*
      (this.form.value?.currency2?this.form.value?.currency1/this.form.value?.currency2:0));
    localStorage.setItem('currency2_value',this.second?.toString());
    localStorage.setItem('currency1_value',this.first?.toString());
  }

  secondInput(){
    // this.second=event.target.value;
    // this.first=this.second*this.currencies[this.index_to].rate/this.currencies[this.index_from].rate;
    this.form.controls['sum1'].patchValue(this.form.value?.sum2*
      (this.form.value?.currency1?this.form.value?.currency2/this.form.value?.currency1:0));
    localStorage.setItem('currency2_value',this.second?.toString());
    localStorage.setItem('currency1_value',this.first?.toString());
  }
}
