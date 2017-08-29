import { Component } from '@angular/core';

import { Language } from 'angular-l10n'

@Component({
    selector: 'app-nav',
    templateUrl: './app.nav.component.html'
})
export class NavComponent {
    @Language() lang: string;
    
    constructor () {
        console.log("NavComponent constructor");
    }
}