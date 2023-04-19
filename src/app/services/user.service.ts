import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userList: User[] = [];

  constructor(private httpService: HttpService)
  {
    this.httpService.get().subscribe(data =>
      data.users.forEach((user: User) =>
        this.userList.push(user)));
  }

  register(user: User) {
    if(this.check(user))
      return false;

    this.httpService.postUser(user).subscribe(s => this.userList.push(s));
    return true;
  }

  check(user: User) {
    return (this.userList.findIndex(u => u.username === user.username) != -1);
  }
}
