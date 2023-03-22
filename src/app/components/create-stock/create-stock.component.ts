import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Stock } from 'src/app/models/stock';

@Component({
  selector: 'create-stock',
  templateUrl: './create-stock.component.html',
  styleUrls: ['./create-stock.component.css']
})
export class CreateStockComponent
{
  @Output() newItemEvent = new EventEmitter<Stock>();
  public s: Stock = new Stock('', '', 0, 0);
  public addStock (s: Stock): void
  {
    let stock = new Stock(s.name, s.code, s.price, s.previousPrice, s.exchange);
    this.newItemEvent.emit(stock);
  }
}
