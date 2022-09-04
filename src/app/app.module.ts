import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProducersComponent } from './producers/producers.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProducerDetailComponent } from './producer-detail/producer-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { LicenseComponent } from './license/license.component';
import { LicenseDetailComponent } from './license-detail/license-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { JwtModule } from '@auth0/angular-jwt';
import { HighlightDirective } from './highlight.directive';
import { PricePipe } from './price.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ProducersComponent,
    ProducerDetailComponent,
    MessagesComponent,
    LicenseComponent,
    LicenseDetailComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    HighlightDirective,
    PricePipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    JwtModule.forRoot({
      config : {
        tokenGetter : () => {
          return localStorage.getItem("token");
        }
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
