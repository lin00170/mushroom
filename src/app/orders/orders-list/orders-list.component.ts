import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,NavigationExtras,Router} from "@angular/router";
//@ts-ignore
import * as alldata from '../../../assets/mushroomDataBase.json';
//mat
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import { RatioTileStyler } from '@angular/material/grid-list/tile-styler';
import { mixinColor } from '@angular/material/core';
/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
interface detailCard {
  id:number;
  title: string;
  subtitle: string;
  price:number;
  quantity:number;
  commit: string;
  imgUrl:string;
  rate:grade[];
}
interface grade{
  name:string;
}

/**
 * @title Tree with flat nodes
 */
@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})

export class OrdersListComponent implements OnInit {
  options:string[]=['from low to high','from high to low'];
  
  /** Flat node with expandable and level information */

alldetails:detailCard[];
keepDetails:detailCard|any;
details:detailCard|any;

  constructor(private route:ActivatedRoute) {
   this.alldetails=alldata.default;
  }

  //for string serach
  myFilter(option:string,data:string):void{
   this.keepDetails=this.details=this.alldetails.filter(item=>{
      //@ts-ignore
      return item[option].search(data)>-1
   })
  }
  //for rate filter
  rateFilter(chose:number){
    //filter do not change self,will return new an array
    //@ts-ignore
   this.details=this.keepDetails.filter(item=>{
     //get star content
       //@ts-ignore
     const rateLevel=item['rate'].filter((item)=>item.name==='grade')

     return rateLevel.length>=chose
   })
  }
  //for price filter
     //@ts-ignore
  priceFilter(...arg){
       //@ts-ignore
    this.details=this.keepDetails.filter((item)=>{
      let max=!arg[1]?2000:arg[1];
      let min=!arg[0]?0:arg[0];
      return item['price']>=min && item['price']<=max;

    })
  }
  //price sort
   priceSort():void{
     const obj=document.querySelector('#sortId')
   
     const _this=this;
     setTimeout(function(){
        //@ts-ignore
       let order=_this.options.indexOf(obj.textContent)===0?1:-1;
       _this.details.sort(
      //@ts-ignore
       (a,b)=>{
         return (a.price-b.price)*order;
       }  
       )
     },0)
   }
  //init the class 
  ngOnInit(): void {
    let _this=this;
    this.route.params.subscribe(function(params)
    {
      const searchData=params['id'];
      searchData[0]==="?"
        ?_this.myFilter('title',searchData.substr(1))
        :_this.myFilter('subtitle',searchData)
     })
  }
}
