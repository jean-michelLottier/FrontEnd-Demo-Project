import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Language } from 'angular-l10n';

import { ItemService } from './app.item.service';
import { Item } from './app.item';

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
                private router: Router) {
        console.log("ItemComponent constructor");
        this._displayDetails = false;
        this._itemSelected = 0;
    }

    ngOnInit() {
        console.log("init item component");
        this.route.paramMap.switchMap((params: ParamMap) => this.itemSevice.getItems(params.get('category')))
        .subscribe((items: Item.ItemInterface[]) => this.items = items);
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