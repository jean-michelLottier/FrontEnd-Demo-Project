import { Component } from "@angular/core";
import { Alert } from "./app.alert";
import { AlertService } from "./app.alert.service";
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";

@Component({
    moduleId: module.id,
    selector: 'alert',
    templateUrl: './app.alert.component.html'
})
export class AlertComponent implements OnInit {
    alerts:Alert[]
    
    constructor(private alertService: AlertService) {
        this.alerts = new Array<Alert>();
    }

    ngOnInit() {
        this.alertService.getAlert().subscribe(alert => {
            if(alert == undefined) {
                this.alerts = new Array();
            } else {
                this.alerts.push(alert);
            }
        })
    }

    closeAlert(index: number): void {
        this.alerts.splice(index, 1);
    }
}