import { Component } from '@angular/core';

@Component({
    selector: 'app-messages',
    template: 'this is the messages compontent <div *ngFor="let message of messages">{{message.text}} by: {{message.owner}} </div>'
})
export class MessagesComponent {
    messages = [{text: 'some text', owner: 'Piter'}, {text: 'other text', owner: 'Dawid'}];
}
