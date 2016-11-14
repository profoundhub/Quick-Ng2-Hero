import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-about',
    templateUrl: 'components/about/about.component.html',
    styleUrls: ['components/about/about.component.css']
})

export class AboutComponent {
    pageName: string = "About Us";
}
