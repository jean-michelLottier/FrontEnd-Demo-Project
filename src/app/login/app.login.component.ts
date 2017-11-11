import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from './app.login.service';

@Component({
    moduleId: module.id,
    selector: 'app-login',
    templateUrl: "./app.login.component.html"
})
export class LoginComponent implements OnInit {
    login: string;
    password: string;
    isProcessing: boolean;

    constructor(private loginService: LoginService, private router: Router) {}
    
    ngOnInit() {
        console.log('LoginComponent initiated');
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
            this.login = "";
            this.password = "";
            this.isProcessing = false;
        });
    }
}