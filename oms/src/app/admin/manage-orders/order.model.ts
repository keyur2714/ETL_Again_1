import { ItemOrder } from 'src/app/services/item-order.model';

export class Order {
    constructor(public id?:number,public orderItems?: ItemOrder[],public price?:number){}
}