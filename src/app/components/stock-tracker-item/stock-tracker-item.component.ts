import { Component, Input, OnInit } from '@angular/core';
import { Stock } from 'src/app/model/stock';

@Component({
  selector: 'stock-tracker-item',
  templateUrl: './stock-tracker-item.component.html',
  styleUrls: ['./stock-tracker-item.component.css']
})
export class StockTrackerItemComponent implements OnInit
{
  @Input() stock: Stock = new Stock('Test Stock Company', 'TSC', 85, 80);
  public isPositiveChange: string = 'positive';
  public changeAmount: number = 0;
  public changeRatio: number = 0;

  toggleFavorite ()
  {
    this.stock.favorite = !this.stock.favorite;
  }
  ngOnInit (): void
  {
    this.changeAmount = this.stock.price - this.stock.previousPrice;
    this.changeRatio = (this.changeAmount / this.stock.price) * 100;
    if (this.stock.price < this.stock.previousPrice)
    {
      this.isPositiveChange = 'negative';
    }
  }
}
