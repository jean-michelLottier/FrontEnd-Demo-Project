import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Item } from './app.item';
import { Category } from './app.category';

@Injectable()
export class ItemService implements OnInit {

    constructor (private http: HttpClient) {}

    ngOnInit () {}

    getItems (category: string): Observable<Item.ItemInterface[]> {
        console.log("itemService: getItems")
        return this.http.get<Item.ItemImpl[]>(Item.BACKEND_URL + '/' + category);
    }

    getItem (id: number): Observable<Item.ItemInterface> {
        return this.http.get<Item.ItemImpl>(Item.BACKEND_URL + '/item/' + id);
    }

    updateItem (item:Item.ItemInterface) {
        console.log("update item service");
        return this.http.post(Item.BACKEND_URL + '/update', item);
    }

    createItem (item:Item.ItemInterface) {
        console.log("create item service");
        let body = JSON.stringify(item).replace(new RegExp('_', 'g'), "");

        return this.http.post(Item.BACKEND_URL + "/new", body, {headers: (new HttpHeaders()).set('Content-Type', 'application/json')});
    }

    deleteItem(id: number) {
        console.log("delete item service");
        return this.http.get(Item.BACKEND_URL + '/delete/' + id);
    }
    
}