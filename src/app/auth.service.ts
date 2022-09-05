import { registerLocaleData } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map, Observable } from 'rxjs';
import { CartService } from './cart.service';
import { LoginComponent } from './login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authURL = `https://localhost:5001/api/Auth`;
  httpOptions = {
    headers : new HttpHeaders({ 'Content-Type' : 'application/json'})
  };

  constructor(private http : HttpClient,
     private router : Router,
      private jwtService : JwtHelperService,
      private cartService : CartService) { }

  register( userData : any) : Observable<any>{
    return this.http.post<any>(`${this.authURL}/sign-up`, userData)
    .pipe(map(() => {
      this.router.navigate([`login`]);

    }));
  }

  login(userData : any) : Observable<any>{
    localStorage.setItem('id', userData.email);
    return this.http.post(`${this.authURL}/login`, userData, {responseType: 'text'})
    .pipe(map((response : any) => {
      if(response){
        localStorage.setItem('token', response);
        let jwtData = response.split('.')[1]
        let decodedJwtJsonData = window.atob(jwtData)
        let decodedJwtData = JSON.parse(decodedJwtJsonData)
        localStorage.setItem('role', decodedJwtData.role);
        localStorage.setItem('UserId', decodedJwtData.UserId);


        this.cartService.addCart(response, decodedJwtData.UserId);

        this.router.navigate([`/`]);
      }
    }))
  }

  isLoggedIn(){
    const token = localStorage.getItem(`token`) || "";
    return !this.jwtService.isTokenExpired(token); 
  }

  logout(){
    this.cartService.deleteCart(localStorage.getItem("token") || "");
    localStorage.removeItem(`token`);
    localStorage.removeItem(`id`);
    localStorage.removeItem(`role`);
    localStorage.removeItem(`UserId`);


    this.router.navigate([`/login`]);
  }
}
