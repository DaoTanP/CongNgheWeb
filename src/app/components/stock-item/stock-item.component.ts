import { Component, OnInit } from '@angular/core';
import { Stock } from 'src/app/model/stock';

@Component({
  selector: 'stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})
export class StockItemComponent
{
  public stock: Stock = new Stock('Test Stock Company', 'TSC', 85, 80);

  toggleFavorite ()
  {
    this.stock.favorite = !this.stock.favorite;
  }

  // ngOnInit ()
  // {
  // }
}
