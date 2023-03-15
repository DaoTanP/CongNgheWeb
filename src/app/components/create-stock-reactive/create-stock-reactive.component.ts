import { Component, Output, EventEmitter } from '@angular/core';
import { Stock } from 'src/app/model/stock';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'create-stock-reactive',
  templateUrl: './create-stock-reactive.component.html',
  styleUrls: ['./create-stock-reactive.component.css']
})
export class CreateStockReactiveComponent {
  @Output() newItemEvent = new EventEmitter<Stock>();
  public s: Stock = new Stock('', '', 0, 0);
  public stockForm: FormGroup = new FormGroup({});
  public addStock (s: Stock): void
  {
    let stock = new Stock(s.name, s.code, s.price, s.previousPrice, s.exchange);
    this.newItemEvent.emit(stock);
  }
}
