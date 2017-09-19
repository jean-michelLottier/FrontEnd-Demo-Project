import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { Language } from 'angular-l10n';

import { Item } from '../item/app.item';
import { ItemService } from '../item/app.item.service';
import { Category } from '../item/app.category';

@Component ({
    moduleId: module.id,
    selector: 'app-item-edition',
    templateUrl: './item-edition.component.html'
})
export class ItemEditionComponent implements OnInit {
    @Language() lang: string;

    Category = Category;
    categories: string[];
    item: Item.ItemInterface;
    itemMode: string;

    constructor (private route: ActivatedRoute, private router: Router, 
        private itemService: ItemService, private location: Location) {
        this.categories = Object.keys(Category);
        this.categories = this.categories.slice(0,this.categories.length / 2)
        console.log("categories: " + this.categories);
    }

    ngOnInit () {
        if(this.router.url.includes('edition')){
            this.itemMode = "edition";
            this.route.paramMap.switchMap(
                (params: ParamMap) => this.itemService.getItem(+params.get('id')))
                .subscribe((item:Item.ItemInterface) => {this.item = item; console.log("item category: " + this.item.category);});
        } else {
            this.itemMode = "creation";
            this.item = new Item.ItemImpl();
        }
    }

    submitItem(): void {
        alert(`saved!!! ${JSON.stringify(this.item)}`);
        if(this.itemMode === "edition") {
            this.editItem();
        } else {
            this.createItem();
        }
    }

    editItem(): void {
        console.log("Edit item method");
        this.itemService.updateItem(this.item);
    }

    createItem(): void {
        console.log("Create item method");
        this.itemService.createItem(this.item);
    }

    cancelEdition(): void {
        console.log("Cancel edition method");
        if (this.itemMode === "edition") {
            this.location.back();
        } else {
            this.router.navigate(['/home']);
        }
    }
}