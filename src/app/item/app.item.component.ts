import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { LocaleService, Language, TranslationService } from 'angular-l10n';

import { ItemService } from './app.item.service';
import { Item } from './app.item';
import { AlertService } from '../alert/app.alert.service';
import { BusinessCardService }  from '../business_card/app.businesscard.service';
import { BusinessCardAlertService } from '../business_card/app.businesscard.alert.service';
import { IBusinessCard } from '../business_card/app.ibusinesscard';

@Component({
    moduleId: module.id,
    selector: 'app-item',
    templateUrl: './app.item.component.html'
})
export class ItemComponent implements OnInit {
    @Language() lang: string;
    items: Item.ItemInterface[];
    private _displayDetails: boolean;
    private _itemSelected: Number;

    constructor(private itemSevice: ItemService, private route: ActivatedRoute,
                private router: Router, private localeService: LocaleService,
                private alertService: AlertService, private translationService: TranslationService,
                private businessCardService: BusinessCardService, private businessCardAlertService: BusinessCardAlertService) {
        console.log("ItemComponent constructor");
        this._displayDetails = false;
        this._itemSelected = 0;
    }

    ngOnInit() {
        this.alertService.clearAlert();
        let language = this.localeService.getCurrentLanguage();
        this.route.paramMap.switchMap((params: ParamMap) => this.itemSevice.getItems(params.get('category'), language))
        .subscribe((items: Item.ItemInterface[]) => this.items = items, error => {
            if(error.status === 401) {
                this.router.navigate(['/login']);
            } else {
                this.alertService.warnAlert(this.translationService.translate("ErrConnectionRefused"));
            }
        });

        this.businessCardService.getBusinessCard("", language).subscribe((bc: IBusinessCard) => {
            this.businessCardAlertService.alertBusinessCard(bc);
        }, error => {
            this.alertService.warnAlert(this.translationService.translate("ErrConnectionRefused"));
        });
    }

    get displayDetails (): boolean {
        return this._displayDetails;
    }

    set displayDetails (val: boolean) {
        this._displayDetails = val;
    }

    get itemSeleted (): Number {
        return this._itemSelected;
    }

    set itemSelected (itemSelected: Number) {
        this._itemSelected = itemSelected;
    }

    toggleDisplayDetails (displayDetails: boolean, itemSelected: Number): void {
        this._displayDetails = displayDetails;
        this._itemSelected = itemSelected;
    }
}