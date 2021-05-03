import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ProductsComponent} from './products/products.component'

const routes: Routes = [
  {
    path:'',
    component:ProductsComponent
  },
  {path:'detail/:id',loadChildren:()=>import('../detail/detail.module').then(m=>m.DetailModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductspageRoutingModule { }
