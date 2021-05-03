import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import {ApiService} from '../../api.service';


/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
// tslint:disable-next-line:class-name
interface detailCard {
  id: number;
  title: string;
  subtitle: string;
  price: number;
  quantity: number;
  commit: string;
  imgUrl: string;
  rate: grade[];
}

// tslint:disable-next-line:class-name
interface grade {
  name: string;
}

/**
 * @title Tree with flat nodes
 */
@Component({
  selector: 'app-orders-list',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {
  options: string[] = ['from low to high', 'from high to low'];

  /** Flat node with expandable and level information */

  alldetails: unknown;
  keepDetails: detailCard | any;
  details: detailCard | any;

  constructor(private route: ActivatedRoute, private apiService: ApiService) {
  }

  // for string serach
  myFilter(option: string, data: string): void {
    // @ts-ignore
    this.keepDetails = this.details = this.alldetails.filter(item => {
      // @ts-ignore
      return item[option].search(data) > -1;
    });
  }

  // for rate filter
  // tslint:disable-next-line:typedef
  rateFilter(chose: number) {
    // filter do not change self,will return new an array
    // @ts-ignore
    this.details = this.keepDetails.filter(item => {
      // get star content
      // @ts-ignore
      // tslint:disable-next-line:no-shadowed-variable
      const rateLevel = item.rate.filter((item) => item.name === 'grade');

      return rateLevel.length >= chose;
    });
  }

  // for price filter
  // @ts-ignore
  // tslint:disable-next-line:typedef
  priceFilter(...arg) {
    // @ts-ignore
    this.details = this.keepDetails.filter((item) => {
      const max = !arg[1] ? 2000 : arg[1];
      const min = !arg[0] ? 0 : arg[0];
      return item.price >= min && item.price <= max;

    });
  }

  // price sort
  priceSort(): void {
    const obj = document.querySelector('#sortId');

    // tslint:disable-next-line:variable-name
    const _this = this;
    // tslint:disable-next-line:only-arrow-functions typedef
    setTimeout(function () {
      // @ts-ignore
      const order = _this.options.indexOf(obj.textContent) === 0 ? 1 : -1;
      _this.details.sort(
        // @ts-ignore
        (a, b) => {
          return (a.price - b.price) * order;
        }
      );
    }, 0);
  }

  // @ts-ignore
  // tslint:disable-next-line:typedef
  rateForm(value) {
    // @ts-ignore
    const a = [];
    for (let i = 1; i < 6; i++) {
      if (i <= value) {
        a.push({
          name: 'grade',
        })
      } else {
        a.push({
          name: 'star_border',
        })
      }
    }
    return a;
  };

  // init the class
  ngOnInit(): void {
    // tslint:disable-next-line:variable-name
    const _this = this;
    // tslint:disable-next-line:only-arrow-functions typedef
    this.route.params.subscribe(function (params) {
      _this.apiService.getData({id: 0}).subscribe(
        (data) => {
          if(data instanceof Array)
          _this.alldetails = data.map((item) =>{
            return {
              'id':item.mushroom_id,
              'title':item.title,
              'price':item.price,
              'subtitle':item.subtitle,
              'imgUrl':item.img,
              'rate':_this.rateForm(item.rate)
            }
          }
          );
          const searchData = params.id;
          searchData[0] === '?'
            ? _this.myFilter('title', searchData.substr(1))
            : _this.myFilter('subtitle', searchData);
        })
    });

  }
}
