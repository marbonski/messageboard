import { Component } from '@angular/core';
import { MessagesComponent } from './messages.components';

@Component({
  selector: 'app-root',
  template: '<h1>hello {{title}}</h1><app-messages></app-messages>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My app';
}
