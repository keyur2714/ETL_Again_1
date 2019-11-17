import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-software',
  templateUrl: './software.component.html',
  styleUrls: ['./software.component.css']
})
export class SoftwareComponent implements OnInit {

  softwareName : string = '';
  price : string = '';

  constructor(private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    // this.activatedRoute.queryParams.subscribe(
    //   (queryParams)=>{
    //     this.softwareName = queryParams.name;
    //     this.price = queryParams.price;
    //   }
    // )

    this.activatedRoute.queryParamMap.subscribe(
      (queryParam)=>{
        this.softwareName = queryParam.get('name');
        this.price = queryParam.get('price');
      }
    )
  }


}
