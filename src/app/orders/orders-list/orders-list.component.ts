import { Component, OnInit } from '@angular/core';

//mat
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
interface detailCard {
  title: string;
  subtitle: string;
  price:number;
  commit: string;
  imgUrl:string;
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
details:detailCard[]=[
  {title:"lion's mane",
  subtitle:"fresh mushroom",
  price:200,
  commit: "",
  imgUrl:"https://s3.amazonaws.com/cdn.fieldforest.net/images/thumb/lions-mane-table-top-farm-1.jpg"},
  {title:"lion's mane",
  subtitle:"fresh mushroom",
  price:200,
  commit: "",
  imgUrl:"https://s3.amazonaws.com/cdn.fieldforest.net/images/thumb/shiitake-table-top-farm-1.jpg"},
  {title:"lion's mane",
  subtitle:"fresh mushroom",
  price:200,
  commit: "",
  imgUrl:"https://s3.amazonaws.com/cdn.fieldforest.net/images/thumb/lions-mane-table-top-farm-1.jpg"}
]

  constructor() {
  
  }



  ngOnInit(): void {
  }
}
