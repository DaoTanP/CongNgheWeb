import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  public formBuilder: FormBuilder = new FormBuilder();
  public registerForm: FormGroup = this.formBuilder.group({
    username: [null, [Validators.required, Validators.minLength(3)]],
    password: [null, [Validators.required, Validators.minLength(8)]],
  });

  constructor(private userService: UserService, private router: Router){
  }

  public register (): void
  {
    const username = this.registerForm.value.username;
    const password = this.registerForm.value.password;
    let user = new User(username, password);
    this.userService.register(user);
    this.registerForm.reset();
    this.router.navigate(['/login']);
  }
}
