import { Component } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

@Component({
    selector: 'my-home',
    templateUrl: 'components/home/home.component.html',
    styleUrls: ['components/home/home.component.css']
})

export class HomeComponent {
    pageName: string = "Home Page";
    users = {};

    constructor(http: Http) {
        this.users = http.get("/users").map(data => data.json());
    }
}
