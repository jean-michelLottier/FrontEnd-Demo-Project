import { Category } from './app.category';
import { EventEmitter } from '@angular/core';

export namespace Item {
    export interface ItemInterface {
        id: Number;
        category: Category;
        title: string;
        description: string;
        createdDate: Date;
        startExperience: Date;
        endExperience: Date;
    }

    export class ItemImpl implements ItemInterface {
        id: Number;
        _category: Category;
        _title: string;
        _description: string;
        createdDate: Date;
        _startExperience: Date;
        _endExperience: Date;

        constructor() {
            this._category = Category.PROFESSIONAL_EXPERIENCE;
            this._startExperience = new Date();
        }

        set category(category:Category) {
            this._category = category;
        }

        get category() {
            return this._category;
        }

        set title(title:string) {
            this._title = title;
        }

        get title() {
            return this._title;
        }

        set description(description:string) {
            this._description = description;
        }

        get description() {
            return this._description;
        }

        set startExperience(startExperience:Date) {
            if (startExperience instanceof Date) {
                this._startExperience = startExperience;
            } else {
                this._startExperience = new Date(startExperience);
            }
        }

        get startExperience() {
            return this._startExperience;
        }

        set endExperience(endExperience:Date) {
            if (endExperience instanceof Date) {
                this._endExperience = endExperience;
            } else {
                this._endExperience = new Date(endExperience);
            }
        }

        get endExperience() {
            return this._endExperience;
        }
    }
}