import { Injectable } from '@angular/core';
import { Stock } from '../models/stock';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class StockService
{
  private stockList: Stock[] = [];
  constructor(private httpService: HttpService)
  {
    this.httpService.get().subscribe(data =>
      data.stocks.forEach((stock: Stock) =>
        this.stockList.push(stock)));
  }
  get ()
  {
    return this.stockList;
  }
  find (code: string)
  {
    return this.stockList.find(s => s.code == code);
  }
  findInDatabase ()
  {
    return this.httpService.get();
  }
  add (stock: Stock)
  {
    if (this.find(stock.code))
    {
      return false;
    }
    this.httpService.post(stock).subscribe(s => this.stockList.push(s));
    return true;
  }
}
