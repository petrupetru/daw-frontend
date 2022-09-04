import { registerLocaleData } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map, Observable } from 'rxjs';
import { LoginComponent } from './login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authURL = `https://localhost:5001/api/Auth`;
  httpOptions = {
    headers : new HttpHeaders({ 'Content-Type' : 'application/json'})
  };

  constructor(private http : HttpClient, private router : Router, private jwtService : JwtHelperService) { }

  register( userData : any) : Observable<any>{
    return this.http.post<any>(`${this.authURL}/sign-up`, userData)
    .pipe(map(() => {
      this.router.navigate([`login`]);

    }));
  }

  login(userData : any) : Observable<any>{

    debugger
    return this.http.post(`${this.authURL}/login`, userData, {responseType: 'text'})
    .pipe(map((response : any) => {
      if(response?.token){
        localStorage.setItem('token', response.token);
        this.router.navigate([`/register`]);
      }
    }))
  }

  isLoggedIn(){
    const token = localStorage.getItem(`token`) || "";
    return !this.jwtService.isTokenExpired(token); 
  }

  logout(){
    localStorage.removeItem(`token`);
    this.router.navigate([`/login`]);
  }
}
