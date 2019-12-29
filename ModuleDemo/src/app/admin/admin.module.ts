import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { ManageOrdersComponent } from './manage-orders/manage-orders.component';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
    declarations : [
        AdminComponent,
        ManageOrdersComponent
    ],
    imports : [
        CommonModule,
        AdminRoutingModule
    ],
    providers : [

    ]
})
export class AdminModule {
    constructor(){
        console.log("Admin Module Loaded...");
    }
}