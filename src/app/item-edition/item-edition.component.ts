import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';
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
    isProcessing: boolean;
    isDeleting: boolean;

    constructor (private route: ActivatedRoute, private router: Router, 
        private itemService: ItemService, private location: Location) {
        this.categories = Object.keys(Category);
        this.item = new Item.ItemImpl();
        this.isProcessing = false;
        this.isDeleting = false;
    }

    ngOnInit () {
        if(this.router.url.includes('edition')){
            this.itemMode = "edition";
            this.route.paramMap.switchMap(
                (params: ParamMap) => this.itemService.getItem(+params.get('id')))
                .subscribe((item:Item.ItemInterface) => {
                    this.item = item
            });
        } else {
            this.itemMode = "creation";
        }
    }

    submitItem(): void {
        if(this.itemMode === "edition") {
            this.editItem();
        } else {
            this.createItem();
        }
    }

    editItem(): void {
        console.log("Edit item method");
        this.isProcessing = true;
        this.itemService.updateItem(this.item).subscribe(res => {
            console.log("Succeeded to edit item");
            this.cancelEdition();
        }, error => {
            console.log("Failed to edit item");
        });
    }

    createItem(): void {
        console.log("Create item method");
        this.isProcessing = true;
        this.itemService.createItem(this.item).subscribe(res => {
            console.log("Succeeded to create item");
            this.cancelEdition();
        }, error => {
            console.log("Failed to create item");
        });
    }

    preDeleteItem(): void {
        this.isDeleting = true;
    }

    deleteItem(): void {
        console.log("Delete item method");
        this.isDeleting = false;
        this.isProcessing = true;
        this.itemService.deleteItem(this.item.id).subscribe(res => {
            console.log("Succeeded to delete item");
            this.cancelEdition();
        }, error => {
            console.log("Failed to delete item");
        });
    }

    closeDeleteItem(): void {
        this.isDeleting = false;
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