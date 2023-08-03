import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CurrencyTitlePipe } from './pipes/currency-title.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CurrencyTitlePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
