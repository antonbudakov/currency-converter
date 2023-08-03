import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  first: number=0;
  second: number=0;
  title:string='Currency converter'
  
  firstInput(event:any){  
    this.first=event.target.value;
    console.log('Currency1',this.first);
  }

  secondInput(event:any){
    this.second=event.target.value;
    console.log('Currency2',this.second);
  }
}
