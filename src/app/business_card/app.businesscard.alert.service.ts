import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from "rxjs/Subject";

import { IBusinessCard } from '../business_card/app.ibusinesscard';

@Injectable()
export class BusinessCardAlertService implements OnInit {
    businessCard:Subject<IBusinessCard> = new Subject();

    constructor() {}

    ngOnInit() {}

    alertBusinessCard(bu: IBusinessCard): void {
        this.businessCard.next(bu);
    }

    getBusinessCard(): Observable<IBusinessCard> {
        return this.businessCard.asObservable();
    }
}