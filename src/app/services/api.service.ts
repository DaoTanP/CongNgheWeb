import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService
{

  constructor(private http: HttpClient) { }

  getProducts ()
  {
    const API_URL = 'https://dummyjson.com/products';
    return this.http.get(API_URL);
  }
}
