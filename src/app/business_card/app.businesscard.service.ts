import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IBusinessCard } from '../business_card/app.ibusinesscard';
import { Item } from '../item/app.item';

@Injectable()
export class BusinessCardService {
    constructor(private http: HttpClient) {}
    
    getBusinessCard(user: string, lang: string): Observable<IBusinessCard> {
        return this.http.get<IBusinessCard>(Item.BACKEND_URL + '/' + lang + '/businesscard', {
            headers: (new HttpHeaders()).set('Content-Type', 'application/json'),
            withCredentials: true
        });
    }

    createBusinessCard(businessCard: IBusinessCard) {/*TODO*/}

    updateBusinessCard(businessCard: IBusinessCard, lang: string) {
        return this.http.post(Item.BACKEND_URL + '/' + lang + '/businesscard/update', businessCard, {
            headers: (new HttpHeaders()).set('Content-Type', 'application/json'),
            withCredentials: true
        });
    }
}