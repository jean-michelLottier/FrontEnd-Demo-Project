import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from './app.login.service';
import { AlertService } from '../alert/app.alert.service';
import { Language, TranslationService } from 'angular-l10n';

@Component({
    moduleId: module.id,
    selector: 'app-login',
    templateUrl: "./app.login.component.html"
})
export class LoginComponent implements OnInit {
    @Language()
    lang: string;
    login: string;
    password: string;
    isProcessing: boolean;

    constructor(private loginService: LoginService, private router: Router,
            private alertService: AlertService, private translationService: TranslationService) {}
    
    ngOnInit() {
        console.log('LoginComponent initiated');
        this.alertService.clearAlert();
        this.isProcessing = false;
    }

    signin(): void {
        console.log("Sign in method");
        console.log("login: " + this.login + ", password: " + this.password);
        this.isProcessing = true;
        this.loginService.signin(this.login, this.password).subscribe(res => {
            console.log("Succeeded to sign in: " + this.login);
            this.router.navigate(['/view/home']);
        }, error => {
            console.log("Failed to sign in. status: " + error.status);
            this.alertService.errorAlert(this.translationService.translate("Wrong credential"));
            this.login = "";
            this.password = "";
            this.isProcessing = false;
        });
    }
}