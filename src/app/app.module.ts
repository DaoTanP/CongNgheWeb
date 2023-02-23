import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ResultPageComponent } from './components/result-page/result-page.component';
import { LoginComponent } from './components/login/login.component';
import { StockItemComponent } from './components/stock-item/stock-item.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    SearchPageComponent,
    SearchBarComponent,
    ResultPageComponent,
    LoginComponent,
    StockItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
