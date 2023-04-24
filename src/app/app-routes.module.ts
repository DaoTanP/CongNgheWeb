import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CreateStockReactiveComponent } from './components/create-stock-reactive/create-stock-reactive.component';
import { StockTrackerComponent } from './components/stock-tracker/stock-tracker.component';
import { StockDetailComponent } from './components/stock-detail/stock-detail.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'stocks', component: StockTrackerComponent },
  { path: 'stocks/create', component: CreateStockReactiveComponent },
  { path: 'stocks/:code', component: StockDetailComponent },
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
