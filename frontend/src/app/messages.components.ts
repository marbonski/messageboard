import { Component } from '@angular/core';

@Component({
    selector: 'app-messages',
    template: `
    <div *ngFor="let message of messages">
        <mat-card style="margin:8px">
        <mat-card-title>{{message.owner}}</mat-card-title>
        <mat-card-content>{{message.text}}</mat-card-content>
        </mat-card>
    </div>
    `
})
export class MessagesComponent {
    messages = [{text: 'some text', owner: 'Piter'}, {text: 'other text', owner: 'Dawid'}];
}
