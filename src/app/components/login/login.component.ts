import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent
{
  protected notExist: boolean = false;
  public formBuilder: FormBuilder = new FormBuilder();
  public registerForm: FormGroup = this.formBuilder.group({
    username: [null, [Validators.required, Validators.minLength(3)]],
    password: [null, [Validators.required, Validators.minLength(8)]],
  });

  constructor(private userService: UserService, private router: Router)
  {
    if (userService.isLoggedIn())
      router.navigate(['stocks']);
  }

  public login (): void
  {
    const username = this.registerForm.value.username;
    const password = this.registerForm.value.password;
    let user = new User(username, password);
    if (this.userService.login(user))
      this.router.navigate(['stocks']);
    else
      this.notExist = true;
  }
}
