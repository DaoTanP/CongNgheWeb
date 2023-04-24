import { Component } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  protected isLoggedIn = false;
  constructor(private userService: UserService)
  {
    this.isLoggedIn = this.userService.isLoggedIn();
  }
}
