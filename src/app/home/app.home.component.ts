import { Component, OnInit} from '@angular/core';
import { AlertService } from '../alert/app.alert.service';

@Component ({
    moduleId: module.id,
    selector: 'app-home',
    templateUrl: './app.home.component.html'
})
export class HomeComponent implements OnInit {
    
    constructor (private alertSerive: AlertService) {}

    ngOnInit() {
        this.alertSerive.clearAlert();
    }
}