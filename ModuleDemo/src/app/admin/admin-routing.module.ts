import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ManageOrdersComponent } from './manage-orders/manage-orders.component';

const routes : Routes = [
    {
        path : '' , component : AdminComponent,
        children : [
            {
                path : 'manageOrders' , component : ManageOrdersComponent
            }
        ]
    }
]

@NgModule({
    imports :[
        RouterModule.forChild(routes)
    ],
    exports :[
        RouterModule
    ]
})
export class AdminRoutingModule{
    constructor(){
        console.log("Admin Routing Module Loaded...");
    }
}