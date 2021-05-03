import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages-list',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers'];
  categoryList:string[]=['category-A','category-B','category-C'];

  constructor() { }

  ngOnInit(): void {
  }

}
