import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Register } from '../models/register';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  registrationFormAdmin = this.fb.group({
    email : ['', Validators.required],
    password: ['']
  });

  constructor(private fb : FormBuilder, private authService : AuthService) { }

  ngOnInit(): void {
  }

  onRegisterAdmin(){
    var newUser = new Register(this.registrationFormAdmin.value as Register);
    newUser.role = "Admin";

    this.authService.register(newUser).subscribe();
  }

}
