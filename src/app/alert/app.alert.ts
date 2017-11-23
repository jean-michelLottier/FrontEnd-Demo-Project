import { AlertType } from "./app.alert.type";

export interface Alert {
    type: AlertType;
    message: string;
}