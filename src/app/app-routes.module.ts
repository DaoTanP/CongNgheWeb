import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CreateStockReactiveComponent } from './components/create-stock-reactive/create-stock-reactive.component';
import { StockTrackerComponent } from './components/stock-tracker/stock-tracker.component';

const routes: Routes = [
  { path: '', redirectTo: 'stocks', pathMatch: 'full' },
  { path: 'stocks', component: StockTrackerComponent },
  { path: 'stocks/create', component: CreateStockReactiveComponent },
  { path: '**', redirectTo: 'stocks' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutesModule { }
