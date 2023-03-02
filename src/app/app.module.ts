import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ResultPageComponent } from './components/result-page/result-page.component';
import { LoginComponent } from './components/login/login.component';
import { StockItemComponent } from './components/stock-item/stock-item.component';
import { StockTrackerItemComponent } from './components/stock-tracker-item/stock-tracker-item.component';
import { StockTrackerComponent } from './components/stock-tracker/stock-tracker.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    SearchPageComponent,
    SearchBarComponent,
    ResultPageComponent,
    LoginComponent,
    StockItemComponent,
    StockTrackerItemComponent,
    StockTrackerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
