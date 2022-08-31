import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProducersComponent } from './producers/producers.component';
import { FormsModule } from '@angular/forms';
import { ProducerDetailComponent } from './producer-detail/producer-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { LicenseComponent } from './license/license.component';
import { LicenseDetailComponent } from './license-detail/license-detail.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProducersComponent,
    ProducerDetailComponent,
    MessagesComponent,
    LicenseComponent,
    LicenseDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
