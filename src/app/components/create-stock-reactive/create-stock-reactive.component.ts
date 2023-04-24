import { Component, Output, EventEmitter } from '@angular/core';
import { Stock } from 'src/app/models/stock';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { StockService } from 'src/app/services/stock.service';
import { Router } from '@angular/router';

@Component({
  selector: 'create-stock-reactive',
  templateUrl: './create-stock-reactive.component.html',
  styleUrls: ['./create-stock-reactive.component.css']
})
export class CreateStockReactiveComponent
{
  // @Output() newItemEvent = new EventEmitter<Stock>();

  public formBuilder: FormBuilder = new FormBuilder();
  public stockForm: FormGroup = this.formBuilder.group({
    name: [null, [Validators.required, Validators.minLength(3)]],
    code: [null, [Validators.required, Validators.minLength(2)]],
    price: [0, [Validators.required, Validators.min(0)]],
    exchange: null,
  });
  // public stockForm: FormGroup = new FormGroup({
  //   name: new FormControl(null, [Validators.required, Validators.minLength(3)]),
  //   code: new FormControl(null, [Validators.required, Validators.minLength(2)]),
  //   price: new FormControl(0, [Validators.required, Validators.min(0)]),
  //   exchange: new FormControl(null),
  // });
  constructor(private stockService: StockService, private router: Router)
  {
  }

  public addStock (): void
  {
    const name = this.stockForm.value.name;
    const code = this.stockForm.value.code;
    const price = this.stockForm.value.price;
    const exchange = this.stockForm.value.exchange;
    let stock = new Stock(name, code, price, price, exchange);
    this.stockService.add(stock);
    // this.newItemEvent.emit(stock);
    this.stockForm.reset();
    this.router.navigate(['stocks']);
  }

  public resetForm (): void
  {
    this.stockForm.setValue({
      name: null,
      code: null,
      price: 0,
      exchange: null
    });
    this.stockForm.markAsUntouched();
    this.stockForm.markAsPristine();
  }

  get name ()
  {
    return this.stockForm.controls['name'];
  }

  get code ()
  {
    return this.stockForm.controls['code'];
  }

}
