import { Component } from '@angular/core';
import { Stock } from 'src/app/model/stock';

@Component({
  selector: 'stock-tracker',
  templateUrl: './stock-tracker.component.html',
  styleUrls: ['./stock-tracker.component.css']
})
export class StockTrackerComponent
{
  public stocks = [
    new Stock("Apple", "AAPL", 109.68, 109.49),
    new Stock("Google", "GOOG", 747.32, 747.92),
    new Stock("Facebook", "FB", 115.31, 115.10),
    new Stock("Amazon", "AMZN", 739.00, 743.65),
    new Stock("Twitter", "TWTR", 17.98, 18.03),
  ];

}
