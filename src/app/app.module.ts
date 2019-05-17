/**
 * Created by huangjun on 2017/10/18.
 */

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { DashBoardComponent } from './dashboard/dashboard.component';
import { HeroesModule } from './heroes/heroes.module';
// import { HeroListComponent } from './heroes/hero-list.component';
// import { HeroDetailComponent } from './heroes/hero-detail.component';

import { AppRoutingModule } from './app-routing.module';

import { HeroesService } from './heroes/heroes.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HeroesModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashBoardComponent,
    PageNotFoundComponent,
    // HeroListComponent,
    // HeroDetailComponent
  ],
  providers: [ HeroesService ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
