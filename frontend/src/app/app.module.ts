import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material';

import { MessagesComponent } from './messages.components';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent, MessagesComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
