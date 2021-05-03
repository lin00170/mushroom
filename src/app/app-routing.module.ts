import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsComponent} from './productspage/products/products.component'

import {HomepageComponent} from './home/homepage/homepage.component'
const routes: Routes = [
  {path:'',loadChildren:()=>import('./home/homepage.module').then(m=>m.HomepageModule)},
  {path:'productspage/:id',loadChildren:()=>import('./productspage/productspage.module').then(m=>m.ProductspageModule)},
  {path:'detail/:id',loadChildren:()=>import('./detail/detail.module').then(m=>m.DetailModule)},
 /* {path:'productspage',component:ProductsComponent}*/
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
