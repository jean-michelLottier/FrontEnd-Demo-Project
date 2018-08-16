import {Injectable, OnInit} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as shajs from 'sha.js';

import { Item } from '../item/app.item';

@Injectable()
export class LoginService implements OnInit {

    constructor(private http: HttpClient) {}

    ngOnInit() {}

    signin(email:string, password:string) {
        password = shajs('sha256').update(password).digest('hex');
        let body = JSON.stringify({"email":email, "password":password});
        
        return this.http.post(Item.BACKEND_URL + '/account/signin', body, {
            headers: (new HttpHeaders()).set('Content-Type', 'application/json'),
            withCredentials: true
        });
    }
}