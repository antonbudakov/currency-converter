import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CurrencyTitlePipe } from './pipes/currency-title.pipe';
import { TitleDirective } from './directives/title.directive';

@NgModule({
  declarations: [
    AppComponent,
    CurrencyTitlePipe,
    TitleDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
