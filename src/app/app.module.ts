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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { JwtModule } from '@auth0/angular-jwt';
import { HighlightDirective } from './highlight.directive';
import { PricePipe } from './price.pipe';
import { RetryInterceptor } from './retryInerceptor';
import { AdminComponent } from './admin/admin.component';
import { LicenseEditComponent } from './license-edit/license-edit.component';
import { AuthInterceptor } from './auth.interceptor';
import { interceptorProviders } from './interceptors';
import { CartComponent } from './cart/cart.component';


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
    AdminComponent,
    LicenseEditComponent,
    CartComponent,
    
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
  providers: [interceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
