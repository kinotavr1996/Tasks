import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<h1>????? ?????????? {{name}}!</h1>
                <label>??????? ???:</label>
                <input [(ngModel)]="name" placeholder="name">`
})
export class AppComponent {
    name = '';
}