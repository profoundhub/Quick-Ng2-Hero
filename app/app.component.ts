import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    styleUrls: ['./app.component.css'],
    templateUrl: './app.component.html',
    directives: [ ROUTER_DIRECTIVES ],
    providers: [ Location ]
})

export class AppComponent {
    pageHeader: string = "Angular 2 Hero";
}
