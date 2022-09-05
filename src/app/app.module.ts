import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProducersComponent } from './producers/producers.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProducerDetailComponent } from './producer-detail/producer-detail.component';
import { LicenseComponent } from './license/license.component';
import { LicenseDetailComponent } from './license-detail/license-detail.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { JwtModule } from '@auth0/angular-jwt';
import { HighlightDirective } from './highlight.directive';
import { PricePipe } from './price.pipe';
import { LicenseEditComponent } from './license-edit/license-edit.component';
import { interceptorProviders } from './interceptors';
import { CartComponent } from './cart/cart.component';
import { MessagesModule } from './messages/messages.module';
import { AuthModule } from './auth.module';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    ProducersComponent,
    ProducerDetailComponent,
    LicenseComponent,
    LicenseDetailComponent,
    HomeComponent,
    LicenseEditComponent,
    CartComponent,
  ],
  imports: [

    
    HttpClientModule,
    MessagesModule,
    AuthModule,
    SharedModule
  ],
  providers: [interceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
