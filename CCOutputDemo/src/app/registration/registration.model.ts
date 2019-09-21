import { Lookup } from './lookup.model';

export class Registration {
    constructor(public name?:string,public state?:Lookup,public city?:Lookup){}
}