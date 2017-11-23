import { Injectable } from "@angular/core";
import { Alert } from "./app.alert";
import { AlertType } from "./app.alert.type";
import { Subject } from "rxjs/Subject";
import { Observable } from "rxjs/Observable";


@Injectable()
export class AlertService {
    latestAlert:Subject<Alert> = new Subject();
    
    constructor() {
        console.log('constructor AlertService');
    }

    infoAlert(_message: string): void {
        this.latestAlert.next({type: AlertType.Info, message: _message});
    }

    successAlert(_message: string): void {
        this.latestAlert.next({type: AlertType.Success, message: _message});
    }

    warnAlert(_message: string): void {
        this.latestAlert.next({type: AlertType.Warn, message: _message});
    }

    errorAlert(_message: string): void {
        this.latestAlert.next({type: AlertType.Error, message: _message});
    }

    getAlert(): Observable<Alert> {
        return this.latestAlert.asObservable();
    }

    clearAlert(): void {
        this.latestAlert.next();
    }
}