import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { CartListComponent } from './cart-list/cart-list.component';

const routes : Routes = [
    {
        path : '' , component : UserComponent,
        children : [
            {path : 'cart' , component : CartListComponent}
        ]
    }
]

@NgModule({
    imports : [
        RouterModule.forChild(routes)
    ],
    exports : [
        RouterModule
    ]
})
export class UserRoutingModule {
    constructor(){
        console.log("User Routing Module Loaded...");
    }
}