import { Injectable, OnInit } from '@angular/core';

import { Item } from './app.item';
import { Category } from './app.category';

@Injectable()
export class ItemService implements OnInit {
    items: Item.ItemInterface[];

    constructor () {
        this.items = [
            {id:1, category:Category.EDUCATION, title:"Java developer", description:"Java developer description", 
            createdDate: new Date(), startExperience: new Date(), endExperience: new Date()},
            {id:2, category:Category.PROFESSIONAL_EXPERIENCE, title:"Front end developer", description:"Front end description",
            createdDate: new Date(), startExperience: new Date(), endExperience: undefined}
        ];
    }

    ngOnInit () {}

    getItems (category: string): Promise<Item.ItemInterface[]> {
        return Promise.resolve(this.items);
    }

    getItem (id: number): Promise<Item.ItemInterface> {
        return Promise.resolve(this.items.find(item => item.id === id));
    }

    updateItem (item:Item.ItemInterface): Promise<boolean> {
        console.log("update item service");
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                this.items.forEach(el => {
                    if(el.id === item.id) {
                        el.category = item.category;
                        el.description = item.description;
                        el.title = item.title;
                        el.startExperience = item.startExperience;
                        el.endExperience = item.endExperience;
                        resolve(true);
                    }
                });
                reject(false);
            }, 5000);
        });
    }

    createItem (item: Item.ItemInterface): void {
        console.log("create item service");
    }
}