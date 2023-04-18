import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ResultPageComponent } from './components/result-page/result-page.component';
import { LoginComponent } from './components/login/login.component';
import { StockItemComponent } from './components/stock-item/stock-item.component';
import { StockTrackerItemComponent } from './components/stock-tracker-item/stock-tracker-item.component';
import { StockTrackerComponent } from './components/stock-tracker/stock-tracker.component';
import { CreateStockComponent } from './components/create-stock/create-stock.component';
import { CreateStockReactiveComponent } from './components/create-stock-reactive/create-stock-reactive.component';
import { StockService } from './services/stock.service';
import { AppRoutesModule } from './app-routes.module';


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
    StockTrackerComponent,
    CreateStockComponent,
    CreateStockReactiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutesModule
  ],
  providers: [StockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
