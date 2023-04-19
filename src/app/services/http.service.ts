import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Stock } from '../models/stock';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class HttpService
{
  private API_URL = 'http://localhost:3000/stocks';
  private USER_API_URL = 'http://localhost:3000/users';

  constructor(private httpClient: HttpClient) { }

  public get (): Observable<any>
  {
    return this.httpClient.get(this.API_URL);
  }

  public post (stock: Stock): Observable<any>
  {
    return this.httpClient.post(this.API_URL, stock);
  }
  public getUser (): Observable<any>
  {
    return this.httpClient.get(this.USER_API_URL);
  }

  public postUser (user: User): Observable<any>
  {
    return this.httpClient.post(this.USER_API_URL, user);
  }
}
