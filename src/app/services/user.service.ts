import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService
{
  private userList: User[] = [];
  private loggedInUser: any = undefined;

  constructor(private httpService: HttpService)
  {
    this.httpService.getUser().subscribe(data =>
      data.forEach((user: User) =>
        this.userList.push(user)));
  }

  register (user: User)
  {
    if (this.check(user))
      return false;

    this.httpService.postUser(user).subscribe(s => this.userList.push(s));
    return true;
  }

  check (user: User)
  {
    return (this.userList.findIndex(u => u.username === user.username && u.password === user.password) != -1);
  }
  login (user: User)
  {
    if (this.check(user))
    {
      this.loggedInUser = user;
      return true;
    }
    return false;
  }
  isLoggedIn ()
  {
    return this.loggedInUser != undefined;
  }
}
