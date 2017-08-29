import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Item } from '../item/app.item';
import { ItemService } from '../item/app.item.service';

@Component ({
    moduleId: module.id,
    selector: 'app-item-edition',
    templateUrl: './item-edition.component.html'
})
export class ItemEditionComponent implements OnInit {
    item: Item;

    constructor (private route: ActivatedRoute, private router: Router, private itemService: ItemService) {}

    ngOnInit () {
        this.route.paramMap.switchMap(
            (params: ParamMap) => this.itemService.getItem(+params.get('id')))
            .subscribe((item:Item) => this.item = item);
    }
}