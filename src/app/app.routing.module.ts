import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/app.home.component';
import { ItemComponent } from './item/app.item.component';
import { ItemEditionComponent } from './item-edition/item-edition.component';

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'category/:category',
        component: ItemComponent
    },
    {
        path: 'edition/:id',
        component: ItemEditionComponent
    },
    {
        path: 'new',
        component: ItemEditionComponent
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full' 
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class RoutingModule {}