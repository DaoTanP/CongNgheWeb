import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Stock } from 'src/app/models/stock';
import { StockService } from 'src/app/services/stock.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'stock-tracker',
  templateUrl: './stock-tracker.component.html',
  styleUrls: ['./stock-tracker.component.css']
})
export class StockTrackerComponent
{
  public stocks: Stock[];

  constructor(private stockService: StockService, private userService: UserService, private router: Router)
  {
    if (!userService.isLoggedIn())
      router.navigate(['login']);
    this.stocks = this.stockService.get();
  }

}
