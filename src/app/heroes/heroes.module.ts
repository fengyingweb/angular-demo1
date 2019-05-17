/**
 * Created by huangjun on 2017/10/19.
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HeroListComponent } from './hero-list.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroMiniComponent } from './hero-mini.component';

import { HeroesRoutingModule } from './heroes-routing.module';

import { HeroesService } from './heroes.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HeroesRoutingModule
  ],
  declarations: [
    HeroListComponent,
    HeroDetailComponent,
    HeroMiniComponent
  ],
  providers: [ HeroesService ],

  // 在特性模块中,没有路由时需要把组件放入exports数组中,否则会报错,找不到对应的组件
  exports: [
    // HeroListComponent,
    // HeroDetailComponent,
    HeroMiniComponent
  ]
})

export class HeroesModule { }
