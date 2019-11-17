import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  educationId : number = 0;
  educationType : string = '';

  constructor(private location : Location,private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    // this.activatedRoute.params.subscribe(
    //   (params)=>{
    //     console.log(params.id);
    //     this.educationId = params.id;
    //     this.educationType = params.type;
    //   }
    // )

    this.activatedRoute.paramMap.subscribe(
      (paramMap)=>{
        this.educationId = parseInt(paramMap.get('id'));
        this.educationType = paramMap.get('type');
      }
    )
  }

  back():void{
    this.location.back();
  }

}
