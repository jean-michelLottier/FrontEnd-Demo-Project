import { Component, OnInit } from '@angular/core';

import { BusinessCardAlertService } from './business_card/app.businesscard.alert.service';
import { IBusinessCard } from './business_card/app.ibusinesscard';
import { BusinessCard } from './business_card/app.businesscard';

@Component({
    moduleId: module.id,
    selector: 'app-default',
    templateUrl: './app.default.component.html'
})
export class DefaultComponent implements OnInit {
    businessCard: IBusinessCard;

    constructor(private businessCardAlertService: BusinessCardAlertService) {
        this.businessCard = new BusinessCard();
    }

    ngOnInit() {
        this.businessCardAlertService.getBusinessCard().subscribe(element => {
            if(element == undefined) {
                this.businessCard = new BusinessCard();
            } else {
                this.businessCard = element;
            }
        })
    }
}