import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Stock } from 'src/app/models/stock';
import { StockService } from 'src/app/services/stock.service';

@Component({
  selector: 'app-stock-detail',
  templateUrl: './stock-detail.component.html',
  styleUrls: ['./stock-detail.component.css']
})
export class StockDetailComponent
{
  protected stock: Stock | undefined;
  constructor(private stockService: StockService, private route: ActivatedRoute)
  {
    const code = this.route.snapshot.paramMap.get('code') || '';

    this.stock = this.stockService.get().find((s: Stock) => s.code == code);
  }
}
