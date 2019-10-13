import { Course } from './course.model';

export class Student {
    constructor(public rollNo?:number,public name?:string,public mobileNo?:string,public email?:string,public gender?:string,public course ?: Course){}
    print(): void{
        console.log(this.rollNo+" "+this.name+" "+this.mobileNo+" "+this.email+" "+this.gender+" "+this.course.courseName+" "+this.course.fees);    
    }
}