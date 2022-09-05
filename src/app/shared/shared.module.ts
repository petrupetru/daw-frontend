import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { HighlightDirective } from '../highlight.directive';
import { PricePipe } from '../price.pipe';



@NgModule({
  declarations: [
    HighlightDirective,
    PricePipe,
  ],
  imports: [
    
    
  ],
  exports: [
    HighlightDirective,
    PricePipe,
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
