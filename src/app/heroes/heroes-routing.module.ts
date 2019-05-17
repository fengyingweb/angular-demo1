/**
 * Created by huangjun on 2017/10/19.
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroListComponent } from './hero-list.component';
import { HeroDetailComponent } from './hero-detail.component';

const heroRoutes: Routes= [
  {
    path: 'heroes',
    component: HeroListComponent
  },
  {
    path: 'heroDetail/:id',
    component: HeroDetailComponent
  }
];

const router = RouterModule.forChild(heroRoutes);

@NgModule({
  imports: [ router ],
  exports: [ RouterModule ]
})

export class HeroesRoutingModule { }
