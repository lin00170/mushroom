import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductspageRoutingModule } from './productspage-routing.module';
import { ProductsComponent } from './products/products.component';
//material
import {MatCardModule} from '@angular/material/card';
import {MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav'
import {MatButtonModule} from "@angular/material/button";
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    ProductspageRoutingModule,
    MatCardModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatDividerModule
  ]
})
export class ProductspageModule { }
