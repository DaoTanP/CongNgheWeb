import { Injectable } from '@angular/core';
import { Stock } from '../models/stock';

@Injectable({
  providedIn: 'root'
})
export class StockService {
private stockList: Stock[];
  constructor() {
    this.stockList = [
      new Stock("Apple", "AAPL", 109.68, 109.49),
    new Stock("Google", "GOOG", 747.32, 747.92),
    new Stock("Facebook", "FB", 115.31, 115.10),
    new Stock("Amazon", "AMZN", 739.00, 743.65),
    new Stock("Twitter", "TWTR", 17.98, 18.03),
    ]
   }
   get() {
     return this.stockList;
   }
   find(name: string){
     return this.stockList.findIndex(s => s.name === name);
   }
   add(stock: Stock){
     if(this.find(stock.name) != -1){
        return false;  
    }
    this.stockList.push(stock);
    return true;
   }
}
