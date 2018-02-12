import { IBusinessCard } from './app.ibusinesscard';

export class BusinessCard implements IBusinessCard {
    private _id: number;
    private _user: string;
    private _name: string;
    private _lastname: string;
    private _birthdate: Date;
    private _email: string;
    private _phone: string;
    private _summary: string;
    private _language: string;
    private _title: string

    get id() {
        return this._id;
    }

    get user() {
        return this._user;
    }

    set name(name: string) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set lastname(lastname: string) {
        this._lastname = lastname;
    }

    get lastname() {
        return this._lastname;
    }

    set birthdate(birthdate: Date) {
        this._birthdate = birthdate;
    }

    get birthdate() {
        return this._birthdate;
    }

    set email(email: string) {
        this._email = email;
    }

    get email() {
        return this._email;
    }

    set phone(phone: string) {
        this._phone = phone;
    }

    get phone() {
        return this._phone;
    }

    set summary(summary: string) {
        this._summary = summary;
    }

    get summary() {
        return this._summary;
    }

    set language(language: string) {
        this._language = language;
    }

    get language() {
        return this._language;
    }

    set title(title: string) {
        this._title = title;
    }

    get title() {
        return this._title;
    }
}