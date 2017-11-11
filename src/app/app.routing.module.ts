import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefaultComponent } from './app.default.component';
import { HomeComponent } from './home/app.home.component';
import { ItemComponent } from './item/app.item.component';
import { ItemEditionComponent } from './item-edition/item-edition.component';
import { LoginComponent } from './login/app.login.component';

const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'view',
        component: DefaultComponent,
        children: [
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
            }
        ]
    },
    {
        path: '',
        redirectTo: 'view/home',
        pathMatch: 'full' 
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class RoutingModule {}