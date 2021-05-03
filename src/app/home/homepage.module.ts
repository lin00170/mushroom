import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { MatSidenavModule } from "@angular/material/sidenav";
//swiper
import { SwiperComponent } from "../swiper/swiper.component";
import { MatListModule } from "@angular/material/list";
import { SwiperModule } from "swiper/angular";

import {FormsModule} from "@angular/forms";
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [HomepageComponent,
    SwiperComponent],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,

    //swiper
    SwiperModule,
    FormsModule
  ]
})
export class HomepageModule { }
