import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { JwtModule } from '@auth0/angular-jwt';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { SharedModule } from './shared/shared.module';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    
  ],
  imports: [
    JwtModule.forRoot({
      config : {
        tokenGetter : () => {
          return localStorage.getItem("token");
        }
      }
    }),
    SharedModule,
  ]
  
  
})
export class AuthModule { }
