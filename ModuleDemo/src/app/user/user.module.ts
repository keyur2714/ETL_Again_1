import { NgModule } from '@angular/core';
import { UserComponent } from './user.component';
import { CartListComponent } from './cart-list/cart-list.component';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
    declarations : [
        UserComponent,
        CartListComponent
    ],
    imports : [
        CommonModule,
        UserRoutingModule
    ],
    providers :[

    ]
})
export class UserModule{
    constructor(){
        console.log("User Module Loaded...");
    }
}