import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
//@ts-ignore
import * as alldata from '../../../assets/mushroomDataBase.json';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  //@ts-ignore
   detail;
    num=1;
    singlePrice=0;
  constructor(private route:ActivatedRoute) {


   }
   add(){
     this.num++
     this.detail.price=this.singlePrice*this.num
   }
   remove(){
     if(this.num>1){this.num--
     this.detail.price=this.singlePrice*this.num}
   }
  ngOnInit(): void {
    let _this=this;
    this.route.params.subscribe(function(params)
    {
  
        //@ts-ignore
        _this.detail=alldata.default.filter(item=>item.id==params['id'])[0]
        _this.singlePrice=_this.detail.price;
    })
  }

}
