import { Injectable, OnInit } from '@angular/core'

import { Item } from './app.item'

@Injectable()
export class ItemService implements OnInit {
    items: Item[];

    constructor () {
        this.items = [
            {id:1, category:"EDUCATION", title:"Java developer", description:"Java developer description", 
            createdDate: new Date(), startExperience: new Date(), endExperience: new Date()},
            {id:2, category:"EDUCATION", title:"Front end developer", description:"Front end description",
            createdDate: new Date(), startExperience: new Date(), endExperience: undefined}
        ];
    }

    ngOnInit () {}

    getItems (category: string): Promise<Item[]> {
        return Promise.resolve(this.items);
    }

    getItem (id: number): Promise<Item> {
        return Promise.resolve(this.items.find(item => item.id === id));
    }
}