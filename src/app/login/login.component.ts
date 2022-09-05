import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../auth.service';
import { CartService } from '../cart.service';
import { Login } from '../models/login';
import { Register } from '../models/register';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    email : ['', Validators.required],
    password: ['']
  });

  constructor(private fb : FormBuilder,
               private authService : AuthService,
               private cartService : CartService) { }

  ngOnInit(): void {
  }

  onLogin() : void{
    var user = new Login(this.loginForm.value as Login);
    this.authService.login(user).subscribe();
    

  }


}
